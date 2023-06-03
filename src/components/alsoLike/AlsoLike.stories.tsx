import { Meta, StoryObj } from "@storybook/react";
import AlsoLike from "./AlsoLike";
import { Provider } from "react-redux";
import store from "../../../.storybook/storybook-store"

export default {
  title: "Also Like",
  component: AlsoLike,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      }
    ]
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