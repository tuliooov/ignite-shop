"use client"
import { HomeContainer, Product, SliderContainer } from "@/styles/pages/home"
import Link from 'next/link'
import Image from 'next/image'
import { useCallback } from 'react'
import { IProduct } from '@/context/CartContext'
import useEmblaCarousel from 'embla-carousel-react'
import { Footer } from '../Footer'
import { CartButton } from '../CartButton'
import { useCart } from '@/hooks/useCart'

interface ProductsAppProps {
  products: IProduct[]
}

export const ProductsApp = ({products}: ProductsAppProps) => {
    const { addToCart, checkIfItemAlreadyExists } = useCart()

    const [emblaRef] = useEmblaCarousel({
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    })

    const handleAddToCart = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>, product: IProduct) => {
        event.preventDefault()
        addToCart(product)
      },
      [addToCart],
    )

    
    return (
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/product/${prod.id}`}
                  prefetch={false}
                  passHref
                >
                  <Product className="embla__slide">
                    <Image
                      src={prod.imageUrl}
                      alt={prod.name}
                      width={520}
                      height={480}
                    />

                    <Footer name={prod.name} price={prod.price}>
                      <CartButton
                        color="green"
                        size="large"
                        type="button"
                        disabled={checkIfItemAlreadyExists(prod.id)}
                        onClick={(evt) => handleAddToCart(evt, prod)}
                      />
                    </Footer>
                  </Product>
                </Link>
              ))}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    )
}