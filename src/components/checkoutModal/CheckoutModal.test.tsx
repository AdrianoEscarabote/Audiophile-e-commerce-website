import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import CheckoutModal from "./CheckoutModal";
import getCartMockState from "../../testUtils/getCartMockState";

const mockStore = configureMockStore()

describe("Checkout Modal", () => {

  let store: any;

  beforeEach(() => {
    const mockState = getCartMockState()
    const state = mockStore(mockState)

    store = state
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it("should render correctly", async () => {
    render(
      <Provider store={store}>
        <CheckoutModal closeModal={() => {}} />
      </Provider>
    )

    const productName = await screen.findByText("XX99 Mark I Headphones")
    
    expect(productName).toBeInTheDocument()
  })

  it("should clean cart after clicking the button", async () => {

    render(
      <Provider store={store}>
        <CheckoutModal closeModal={() => {}} />
      </Provider>
    )

    const button = await screen.findByText("back to home")

    fireEvent.click(button)

    const actions = store.getActions()

    expect(actions).toEqual([
      {
        payload: null,
        type: "cart/clean",
      },
    ])

  })

})