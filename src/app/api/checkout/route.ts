import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";

interface BodyType {
  priceId: string
}

export async function POST(request: Request) {
  
  const {
    priceId
} = await request.json().then(body => body as BodyType);

  if (!priceId) {
    return new Response(JSON.stringify({
        error: 'Price not found.'
    }), {
        status: 400
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  const userUid = request.headers.get('useruid')

    return new Response(JSON.stringify({
        checkoutUrl: checkoutSession.url
    }), {
        status: 201
    })
}



