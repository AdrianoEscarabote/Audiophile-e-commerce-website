import { RootState } from "@/types/CartProps"

export const selectProductsCount = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce((accum, curr) => accum + curr.quantity, 0)
}

export const selectProductTotalPrice = (rootReducer: RootState) => {
  return rootReducer.cartReducer.products.reduce((accum, curr) => accum + curr.price * curr.quantity, 0)
} 