import Stripe from "stripe";

export const createSession = (response:  Stripe.Response<Stripe.Checkout.Session & {failed: boolean}>): ISession => {

  if(response.failed){
    return {
      failed: true
    }
  }
  const session = response
  
  const costumerName = session.customer_details?.name || 'FULANO'
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    failed: false,
    costumerName,
    product: {
      name: product.name,
      imageUrl: product.images[0]
    }
  }

}

export interface ISession {
  failed: boolean
  costumerName?: string
  product?: {
    name: string
    imageUrl: string
  }
}
