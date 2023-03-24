import { ActionProps, Product } from "@/types/CartReducerTypes";
import cartActionTypes from "./action-types";

const initialState: Product = { 
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action: ActionProps) => {
  switch(action.type) {
    case cartActionTypes.ADD_PRODUCT:
      // verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )
      // se ele estiver, aumentar a sua quantidade em 1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id ? 
            {...product, quantity: product.quantity + action.payload.quantity} 
            : product)
        }
      }
      // se ele não estiver, adicioná-lo
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: action.payload.quantity}]
      }
      break
    default: 
    return {...state}
  }
}

export default cartReducer;