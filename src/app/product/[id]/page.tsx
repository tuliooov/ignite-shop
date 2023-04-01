import axios from "axios";
import { useState } from "react";
import { createProduct } from "@/utils/pages/product";
import { stripe } from "@/lib/stripe";
import { useRouter } from "next/router";
import Head from "next/head";
import { ItemProduct } from "@/components/pages/product/ItemProduct";


interface ProductProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: ProductProps) {
  const product = createProduct(await stripe.products.retrieve(id, {
    expand: ['default_price']
  }));
  return {
    title: `${product.name} - Photo Shop`,
    description: 'Shopping created by Ignite Rocketseat',
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