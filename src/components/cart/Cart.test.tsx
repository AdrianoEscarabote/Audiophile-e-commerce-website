import { fireEvent, render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import configureMockStore from 'redux-mock-store';
import getCartMockState from "../../testUtils/getCartMockState"
import { Provider } from "react-redux";
import { Decrease, Increase } from "../../redux/cart/actions";

const mockStore = configureMockStore()

describe("Cart Component", () => {

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
        <Cart cartOpen={true} closeCart={() => {}} />
      </Provider>
    )
    const productName = await screen.findByText("XX99 Mark I Headphones")
    
    expect(productName).toBeInTheDocument()
  })

  it("should clea cart", async () => {

    render(
      <Provider store={store}>
        <Cart cartOpen={true} closeCart={() => {}} />
      </Provider>
    )

    const buttonClearCart = await screen.findByText("Remove all")

    fireEvent.click(buttonClearCart)

    const actions = store.getActions()

    expect(actions).toEqual([
      {
        payload: null,
        type: "cart/clean",
      },
    ])

  })


  it("should increase the quantity of the product", () => {

    render(
      <Provider store={store}>
        <Cart cartOpen={true} closeCart={() => {}} />
      </Provider>
    )

    store.dispatch(Increase(
      {
        id: 3,
        imagePath: "xx99-mark-one-headphones",
        name: "XX99 Mark I Headphones",
        price: 1750,
        quantity: 1
      }
    ))

    const actions = store.getActions()

    expect(actions).toEqual([
      {
        payload: {
          id: 3,
          imagePath: "xx99-mark-one-headphones",
          name: "XX99 Mark I Headphones",
          price: 1750,
          quantity: 1,
        },
        type: "cart/increase",
      },
    ])
  })


  it("should decrease the quantity of the product", () => {

    render(
      <Provider store={store}>
        <Cart cartOpen={true} closeCart={() => {}} />
      </Provider>
    )

    store.dispatch(Decrease(
      {
        id: 3,
        imagePath: "xx99-mark-one-headphones",
        name: "XX99 Mark I Headphones",
        price: 1750,
        quantity: 1
      }
    ))

    const actions = store.getActions()

    expect(actions).toEqual([
      {
        payload: {
          id: 3,
          imagePath: "xx99-mark-one-headphones",
          name: "XX99 Mark I Headphones",
          price: 1750,
          quantity: 1,
        },
        type: "cart/decrease",
      },
    ])
  })

}) 