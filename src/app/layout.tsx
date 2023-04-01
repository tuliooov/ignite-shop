import { globalStyles } from '@/styles/global'
import logoImg from '../assets/Logo.png'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'
import { ServerStylesheet } from '@/components/ServerStylesheet'

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
      <body>
        {globalStyles()}
        <Container>
          <Header>
            <Image src={logoImg.src} alt={"logo Photo shop"} width={250} height={100} />
          </Header>
          <main>
            {children}
          </main>
        </Container> 
      </body>
    </html>
  )
}
