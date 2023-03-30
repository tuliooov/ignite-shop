import Head from 'next/head'
import { stripe } from "../lib/stripe"
import 'keen-slider/keen-slider.min.css'
import { ProductsApp } from "@/components/pages/home/products"
import { createProducts } from "@/utils/pages/home"




export default async function Home() {

  const products = createProducts(await stripe.products.list({
    expand: ['data.default_price']
  }));

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <ProductsApp products={products} />
    </>
  )
}
