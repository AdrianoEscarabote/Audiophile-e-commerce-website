import ProductTypes from "./action-type";

interface findProductProps {
  payload: string | null
}

export const findProduct = (payload: findProductProps["payload"]) => ({
  type: ProductTypes.SHOW_PRODUCT,
  payload
})