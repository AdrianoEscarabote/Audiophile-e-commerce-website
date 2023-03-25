import { ActionProps, Product } from "@/types/CartReducerTypes";
import { useEffect, useReducer } from "react";
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
    case cartActionTypes.CLEAN_CART:
      return {
        ...state,
        products: []
      }
    case cartActionTypes.INCREASE:
      return {
        ...state,
        products: state.products.map((product) => product.id === action.payload.id 
        ? {...product, quantity: product.quantity + 1}
        : product)
      }
    case cartActionTypes.DECREASE:
      return {
        ...state,
        products: state.products.map((product) => product.id === action.payload.id
        ? {...product, quantity: product.quantity - 1}
        : product)
        .filter((product) => product.quantity > 0)
      }
    default: 
    return {...state}
  }
}

/* export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // atualizar o localStorage sempre que houver uma alteração no estado do carrinho
  useEffect(() => {
    localStorage.setItem(CART_STATE_KEY, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}; */

export default cartReducer;