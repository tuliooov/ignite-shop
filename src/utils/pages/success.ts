import Stripe from "stripe";

export const createSession = (response:  Stripe.Response<Stripe.Checkout.Session>): ISession => {
  const session = response
  
  const costumerName = session.customer_details?.name || 'FULANO'
  const products = session.line_items?.data.map((item) => {
    const prod = item.price?.product as Stripe.Product
    return { id: prod.id, imageUrl: prod.images[0] }
  })


  return {
    costumerName,
    products: products || [],
  }

}

export interface ISession {
  costumerName: string
  products: {
    id: string
    imageUrl: string
  }[]
}
