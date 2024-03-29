import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Provider } from "react-redux";
import store from "../../../.storybook/storybook-store";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
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