import productReducer from "./productdetails/reducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer
})

export default rootReducer;