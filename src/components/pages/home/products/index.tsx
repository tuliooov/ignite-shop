"use client"
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "@/styles/pages/home"
import { IProduct } from '@/utils/pages/home'
import Link from 'next/link'
import Image from 'next/image'

interface ProductsAppProps {
  products: IProduct[]
}

export const ProductsApp = ({products}: ProductsAppProps) => {

    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 3,
          spacing: 48
        }
      });

    return (
    <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={270} height={250} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    )
}