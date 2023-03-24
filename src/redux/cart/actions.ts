import cartActionTypes from "./action-types";

export const addProductToCart = (payload: any) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload: payload
})

export const removeProduct = (payload: any) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload: payload
})

export const Increase = (payload: any) => ({
  type: cartActionTypes.INCREASE,
  payload: payload
})

export const Decrease = (payload: any) => ({
  type: cartActionTypes.DECREASE,
  payload: payload
})