import Stripe from "stripe";
import { formattedPrice } from "../formattedPrice";

export const createProducts = (response: Stripe.Response<Stripe.ApiList<Stripe.Product>>
  ) => {
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    const unitAmount = (price.unit_amount ?? 0) / 100
    const hasFormattedPrice = formattedPrice.format(unitAmount)

    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: hasFormattedPrice,
      numberPrice: unitAmount,
      defaultPriceId: price.id,
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
