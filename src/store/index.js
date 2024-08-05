import productsReducer from "./slices/ProductSlice";
import wishListReduceraaa from "./slices/WishListSlice";
import cartReducer from "./slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishLists: wishListReduceraaa,
  },
});
