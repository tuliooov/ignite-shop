"use client"
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/context/CartContext'

interface ProductsAppProps {
  product: IProduct
}

export const ItemProduct = ({product}: ProductsAppProps) => {
  const { addToCart, checkIfItemAlreadyExists } = useCart()


  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)
  const buttonText = itemAlreadyInCart
    ? 'Produto já está no carrinho'
    : 'Colocar na sacola'


  
  
    return (
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={520}
            height={480}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={itemAlreadyInCart}
          >
            {buttonText}
          </button>
        </ProductDetails>
      </ProductContainer>
    )
}