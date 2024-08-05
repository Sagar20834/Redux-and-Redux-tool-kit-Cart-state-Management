import { createSlice } from "@reduxjs/toolkit";

// Reducer

// export default cartReducer;

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      console.log(state);
      const existingCartItemIndex = findItemIndex(state, action);
      if (existingCartItemIndex !== -1) {
        state[existingCartItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingCartItemIndex = findItemIndex(state, action);
      state.splice(existingCartItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingCartItemIndex = findItemIndex(state, action);
      state[existingCartItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingCartItemIndex = findItemIndex(state, action);
      state[existingCartItemIndex].quantity -= 1;
      if (state[existingCartItemIndex].quantity === 0) {
        state.splice(existingCartItemIndex, 1);
      }
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} = slice.actions;

console.log(slice);

const cartReducer = slice.reducer;
export default cartReducer;
