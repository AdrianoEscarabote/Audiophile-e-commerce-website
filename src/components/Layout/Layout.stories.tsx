import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import store from "../../../.storybook/storybook-store"
import { Layout } from "./Layout"

export default {
  title: "Layout",
  component: Layout,
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