import { ActionProps, Product } from "@/types/CartReducerTypes";
import cartActionTypes from "./action-types";

const initialState: Product = { 
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action: ActionProps) => {
  
  switch(action.type) {
    case cartActionTypes.ADD_PRODUCT:
      // check if the product is already in the cart
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )
      // if he is, increase his amount by 1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id ? 
            {...product, quantity: product.quantity + action.payload.quantity} 
            : product)
        }
      }
      // if it isn't, add it
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

export default cartReducer;