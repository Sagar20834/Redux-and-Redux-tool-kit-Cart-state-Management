import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../../store/slices/CartSlice";
import { useDispatch } from "react-redux";
import { addWishListItem } from "../../store/slices/WishListSlice";

const ProductCard = ({ productId, image, title, rating, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" border rounded-md shadow-lg max-w-80 max-h-96  p-4">
        <div>
          <img
            src={image}
            alt={title}
            className="h-48 max-w-full object-contain"
          />
        </div>
        <div>
          <h3 className=" h-6 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="overflow-hidden text-ellipsis">
              {title}
            </Link>
          </h3>
        </div>
        <div className="price-rating-container">
          <p className="rating">{+rating} ★ ★ ★ ★</p>
          <p className="price">Nrs. {(price * 140).toFixed(2)}</p>
        </div>
        <div className="flex justify-around gap-1 flex-wrap mt-2">
          <button
            className="rounded-md shadow-md bg-purple-400 p-2  shrink  mr-1"
            onClick={() => {
              dispatch(addCartItem({ productId, image, title, rating, price }));
            }}
          >
            Add to Cart
          </button>
          <button
            className="rounded-md shadow-md bg-purple-400 p-2   shrink  mr-1"
            onClick={() => {
              dispatch(addWishListItem({ productId }));
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
