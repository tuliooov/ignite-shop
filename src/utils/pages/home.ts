import Stripe from "stripe";

export const createProducts = (response: Stripe.Response<Stripe.ApiList<Stripe.Product>>
  ) => {
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount || 0) / 100),
    }
  })
  return products
}

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}
