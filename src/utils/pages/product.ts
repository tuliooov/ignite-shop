import Stripe from "stripe";

export const createProduct = (response:  Stripe.Response<Stripe.Product>): IProductComplete => {
  const product = response

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format((price.unit_amount || 0) / 100),
    description: product.description || '',
    defaultPriceId: price.id
  }
}

export interface IProductComplete {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}
