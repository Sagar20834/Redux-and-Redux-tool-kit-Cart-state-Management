import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWishListItem } from "../../store/slices/WishListSlice";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishLists);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-4xl font-semibold mb-2 text-center mx-8">
        The Wish List :
      </h1>
      <hr className="m-4" />
      <div className="flex gap-4 flex-row items-center">
        <div className="text-2xl font-bold">Product Ids:</div>
        {wishlist.map((product, i) => (
          <p
            key={product.productId}
            className="h-8 w-8 bg-violet-400 text-center  rounded-md cursor-pointer"
            onClick={() => {
              dispatch(removeWishListItem(product.productId));
            }}
          >
            {product.productId}
          </p>
        ))}
      </div>
    </>
  );
};

export default WishList;
