import Image from "next/image";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { createSession } from "@/utils/pages/success";

export const metadata = {
  title: 'Compra Realizada | Photo Shop',
  description: 'Shopping created by Ignite Rocketseat',
}


interface SuccessProps {
  searchParams: {
    // session_id: string
  }
}

export default async function Success({ searchParams = {} }: SuccessProps) {

  // const sessionId = String(session_id);
  // const {costumerName, product, failed} = createSession(await stripe.checkout?.sessions?.retrieve(sessionId, {
  //   expand: ['line_items', 'line_items.data.price.product']
  // }).then((response) => {
  //   return response
  // }).catch((response) => {
  //   return { ...response, failed: true}
  // }))


    return <>
    <p>{JSON.stringify(searchParams)}</p></>

}