import axios from "axios";
import { useState } from "react";
import { createProduct } from "@/utils/pages/product";
import { stripe } from "@/lib/stripe";
import { useRouter } from "next/router";
import Head from "next/head";
import { ItemProduct } from "@/components/pages/product/ItemProduct";

export const metadata = {
  title: 'NOME - Ignite Shop',
  description: 'Shopping created by Ignite Rocketseat',
}

interface ProductProps {
  params: {
    id: string
  }
}

export default async function Product({ params: { id } }: ProductProps) {
  const product = createProduct(await stripe.products.retrieve(id, {
    expand: ['default_price']
  }));

  return (
    <ItemProduct product={product}/> 
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
//     ],
//     fallback: 'blocking',
//   }
// }
