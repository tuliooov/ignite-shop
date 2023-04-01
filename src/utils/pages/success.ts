import Stripe from "stripe";

export const createSession = (response:  Stripe.Response<Stripe.Checkout.Session>): ISession => {
  const session = response
  
  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    costumerName,
    product: {
      name: product.name,
      imageUrl: product.images[0]
    }
  }

}

export interface ISession {
  costumerName: string
  product: {
    name: string
    imageUrl: string
  }
}
