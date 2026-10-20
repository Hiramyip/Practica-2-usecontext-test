import { createContext } from "react"
import type { ProductPanelType } from "../types/ProductPanelType"
import type {ProductPreview}  from '../types/ProductPreview'
type CartContextValue = {
    productsPanel: ProductPanelType[],
    isLoadingPanelProducts: boolean,
    addProductToCart: (product:ProductPanelType)=>void,
    cartPreviewProducts:ProductPreview[],
    countProductsCart:number,
    removeProductFromCart: (id: number) => void,
}

export const CartContext = createContext<CartContextValue>({
    productsPanel: [],
    isLoadingPanelProducts: false,
    addProductToCart: ()=>{},
    cartPreviewProducts:[],
    countProductsCart:0,
    removeProductFromCart: () => {}
})

