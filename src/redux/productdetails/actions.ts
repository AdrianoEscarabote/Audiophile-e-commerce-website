import ProductTypes from "./action-type";

interface findProductProps {
  payload: string
}

export const findProduct = (payload: findProductProps["payload"]) => ({
  type: ProductTypes.SHOW_PRODUCT,
  payload
})