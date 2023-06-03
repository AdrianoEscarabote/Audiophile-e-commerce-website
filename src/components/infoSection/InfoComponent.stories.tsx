import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"
import store from "../../../.storybook/storybook-store"
import InfoComponent from "./InfoComponent"

export default {
  title: "Info Section",
  component: InfoComponent,
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