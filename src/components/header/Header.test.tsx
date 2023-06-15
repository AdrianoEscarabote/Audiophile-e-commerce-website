import { render } from "@testing-library/react"
import { Header } from "./Header"
import configureMockStore from 'redux-mock-store';
import getCartMockState from "../../testUtils/getCartMockState";
import { Provider } from "react-redux";

const mockStore = configureMockStore()

describe("Header Component", () => {

  let store: any;

  beforeEach(() => {
    const mockState = getCartMockState()
    const state = mockStore(mockState)

    store = state
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
  
  it("should render correctly", () => {

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

  })

})