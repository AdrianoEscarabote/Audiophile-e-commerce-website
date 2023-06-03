import { Meta, StoryObj } from "@storybook/react";
import GridImages from "./GridImages";
import { Provider } from "react-redux";
import store from "../../../.storybook/storybook-store";

export default {
  title: "Grid Images",
  component: GridImages,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    gallery: {
      first: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
      }
    },
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

export const Primary: StoryObj = {}