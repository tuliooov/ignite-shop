"use client"
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { IProductComplete } from '@/utils/pages/product'

interface ProductsAppProps {
  product: IProductComplete
}

export const ItemProduct = ({product}: ProductsAppProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  
    return (
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={700} height={500} alt="" />
        </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
    )
}