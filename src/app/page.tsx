import { stripe } from "../lib/stripe"
import 'keen-slider/keen-slider.min.css'
import { ProductsApp } from "@/components/pages/home/products"
import { createProducts } from "@/utils/pages/home"

export const metadata = {
  title: 'Home - Ignite Shop',
  description: 'Shopping created by Ignite Rocketseat',
}

export default async function Home() {

  const products = createProducts(await stripe.products.list({
    expand: ['data.default_price'],
    active: true
  }));

  return (
    <ProductsApp products={products} />
  )
}
