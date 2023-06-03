import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import store from "../../../.storybook/storybook-store"
import ListProducts from "./ListProducts"

export default {
  title: "List Products",
  component: ListProducts,
  parameters: {
    layout: "fullscreen"
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