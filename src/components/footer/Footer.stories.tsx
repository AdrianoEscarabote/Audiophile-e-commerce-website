import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import store from "../../../.storybook/storybook-store"
import { Footer } from "./Footer"

export default {
  title: "Footer",
  component: Footer,
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