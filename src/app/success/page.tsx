import Image from "next/image";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer, SuccessImageContainer, SuccessSectionImage } from "@/styles/pages/success";
import { createSession } from "@/utils/pages/success";

export const dynamic = "force-dynamic"

export const metadata = {
  title: 'Compra Realizada | Photo Shop',
  description: 'Shopping created by Ignite Rocketseat',
}


interface SuccessProps {
  searchParams: {
    session_id: string
  }
}

export default async function Success({ searchParams: { session_id } }: SuccessProps) {

  if (!session_id) {
    return (
      <div>
        <p>
          Oppps... dados não identificados
        </p>
      </div>
    )
  }

  const sessionId = String(session_id);
  const {costumerName, products} = createSession(await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  }))


  const shirtText = products.length <= 1 ? 'camiseta' : 'camisetas'

  return (
    <>

      <SuccessContainer>
        <SuccessSectionImage>
          {products?.map((product, index) => (
            <SuccessImageContainer key={product.id} style={{ order: index }}>
              <Image src={product.imageUrl} alt="" width={120} height={110} />
            </SuccessImageContainer>
          ))}
        </SuccessSectionImage>

        <h1>Compra Efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de{' '}
          {products?.length} {shirtText} já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

