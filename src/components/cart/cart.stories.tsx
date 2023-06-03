import { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./Cart";
import { Provider } from "react-redux";
import store from "../../../.storybook/storybook-store"
import { addProductToCart } from "@/redux/cart/actions";
import { ProductTypeCart } from "@/types/ProductDetailsProps";

const ProductToCart: ProductTypeCart = {
  id: 1,
  imagePath: "yx1-earphones",
  name: "YX1 Wireless Earphones",
  price: 599,
  quantity: 1
};

store.dispatch(addProductToCart(ProductToCart))

export default {
  title: "cart",
  component: Cart,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    cartOpen: true,
    closeCart: () => {},
  },
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          {Story()}
        </Provider>
      )
    }
  ]
} as Meta

export const noProducts: StoryObj = {}