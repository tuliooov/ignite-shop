import Stripe from "stripe";
import { formattedPrice } from "../formattedPrice";
import { IProduct } from "@/context/CartContext";

export const createProducts = (response: Stripe.Response<Stripe.ApiList<Stripe.Product>>
  ): IProduct[] => {
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
      description: product.description || '',
      defaultPriceId: price.id,
    }
  })

  return products
}