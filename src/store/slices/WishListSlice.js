import { createSlice } from "@reduxjs/toolkit";

// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// // Action Creators
// export function addWishListItem(productId) {
//   return { type: WISHLIST_ADD_ITEM, payload: { productId } };
// }
// export function removeWishListItem(productId) {
//   return { type: WISHLIST_REMOVE_ITEM, payload: { productId } };
// }

// Reducer
// const wishListReducer = (state = [], action) => {
//   switch (action.type) {
//     case WISHLIST_ADD_ITEM:
//       return [...state, action.payload];

//     case WISHLIST_REMOVE_ITEM:
//       return state.filter(
//         (wishListItem) => wishListItem.productId !== action.payload.productId
//       );
//     default:
//       return state;
//   }
// };
// export default wishListReducer;

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishListItem(state, action) {
      const existingCartItemIndex = findItemIndex(state, action);
      if (existingCartItemIndex !== -1) {
        return;
      }
      state.push({ ...action.payload, productId: action.payload.productId });
    },
    removeWishListItem(state, action) {
      const existingCartItemIndex = findItemIndex(state, action);
      state.splice(existingCartItemIndex, 1);
    },
  },
});

export const { addWishListItem, removeWishListItem } = slice.actions;

const wishListReducer = slice.reducer;

export default wishListReducer;
