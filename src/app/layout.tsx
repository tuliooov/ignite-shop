import { getCssText } from '@/styles'
import { globalStyles,  } from '@/styles/global'
import logoImg from '../assets/Logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'
import { ServerStylesheet } from '@/components/ServerStylesheet'

export const metadata = {
  title: 'Ignite Shop',
  description: 'Shopping created by Ignite Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
        <ServerStylesheet />
      </head>
      <body>
        <Container>
          <Header>
            <Image src={logoImg.src} alt={"logo ignite shop"} width={100} height={100} />
          </Header>
          <main>
            {children}
          </main>
        </Container>
        {globalStyles()}
      </body>
    </html>
  )
}
