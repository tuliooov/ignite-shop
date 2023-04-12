"use client"
import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cart } from '../Cart'
import { HeaderContainer } from './styles'

export const Header = () => {
  const pathname = usePathname()
  const showCart = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" width={130} height={52} />
      </Link>

      {showCart && <Cart />}
    </HeaderContainer>
  )
}
