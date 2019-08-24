import { combineReducers } from "redux";
import product_rdc from "./productReducer";
import cart_rdc from "./cartReducer";

const rootReducer = combineReducers({
  product_reducer: product_rdc,
  cart_reducer: cart_rdc
});

export default rootReducer;
