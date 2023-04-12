import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";
import { IProduct } from "@/context/CartContext";

interface BodyType {
  products: IProduct[]
}

export async function POST(request: Request) {
  
  const {
    products
} = await request.json().then(body => body as BodyType);

  if (!products.length) {
    return new Response(JSON.stringify({
        error: 'Products not found.'
    }), {
        status: 404
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map(({ defaultPriceId }) => ({
      price: defaultPriceId,
      quantity: 1,
    })),
  })

  const userUid = request.headers.get('useruid')

    return new Response(JSON.stringify({
        checkoutUrl: checkoutSession.url
    }), {
        status: 201
    })
}



