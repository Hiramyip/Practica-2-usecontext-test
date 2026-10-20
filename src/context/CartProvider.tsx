import type {ReactNode } from 'react'
import  useCart  from '../hooks/useCart'
import { CartContext } from './CartContext'

type CartProviderProps = {
    children: ReactNode
}

const CartProvider = ({children}:CartProviderProps) => {
  const {productsPanel, isLoadingPanelProducts,addProductToCart,cartPreviewProducts,countProductsCart, removeProductFromCart} = useCart()
  return (
    <CartContext.Provider 
      value={{
        productsPanel,
        isLoadingPanelProducts,
        addProductToCart,
        cartPreviewProducts,
        countProductsCart, 
        removeProductFromCart
      }}
    >
      {children}  
    </CartContext.Provider>
  )
}

export default CartProvider
