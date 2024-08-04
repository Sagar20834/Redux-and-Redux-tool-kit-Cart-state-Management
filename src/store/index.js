import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/ProductSlice";
import wishListReducer from "./slices/WishListSlice";
import cartReducer from "./slices/CartSlice";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishLists: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
