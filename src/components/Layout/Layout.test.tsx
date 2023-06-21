import { render } from "@testing-library/react"
import { Layout } from "./Layout"
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux"
import getCartMockState from "../../testUtils/getCartMockState";

const mockStore = configureMockStore()

describe("Layout Component", () => {

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
        <Layout>
          
        </Layout>
      </Provider>
    )

  })

})