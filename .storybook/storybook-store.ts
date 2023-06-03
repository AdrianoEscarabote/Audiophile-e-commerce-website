import { createStore } from "redux"
import rootReducer from "../src/redux/root-reducer"
import teste from "../src/testUtils/index"

const initialState = teste()

const store = createStore(rootReducer, initialState)

export default store;