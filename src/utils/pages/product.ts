import { IProduct } from "@/context/CartContext";
import Stripe from "stripe";
import { formattedPrice } from "../formattedPrice";

export const createProduct = (response:  Stripe.Response<Stripe.Product>): IProduct => {
  const product = response

  const price = product.default_price as Stripe.Price
  const unitAmount = (price.unit_amount ?? 0) / 100
  const hasFormattedPrice = formattedPrice.format(unitAmount)

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: hasFormattedPrice,
    description: product.description || '',
    defaultPriceId: price.id,
    numberPrice: unitAmount,
  }
}
