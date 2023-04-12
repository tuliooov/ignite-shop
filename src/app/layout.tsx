import { globalStyles } from '@/styles/global'
import logoImg from '../assets/Logo.png'
import Image from 'next/image'
import { Container,  } from '@/styles/pages/app'
import { ServerStylesheet } from '@/components/ServerStylesheet'
import { CartContextProvider } from '@/context/CartContext'
import Link from 'next/link'
import { Cart } from '@/components/pages/global/Cart'
import { Header } from '@/components/pages/global/Header'

export const metadata = {
  title: 'Photo Shop',
  description: 'Shopping created by Ignite Rocketseat',
}
globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br">
      <head>
        <ServerStylesheet />
      </head>
      <CartContextProvider>
        <body>
            {globalStyles()}
            <Container>
              <Header/>
              <main>
                {children}
              </main>
            </Container> 
        </body>
      </CartContextProvider>
    </html>
  )
}
