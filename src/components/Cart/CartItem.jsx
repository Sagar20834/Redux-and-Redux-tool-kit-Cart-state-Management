import React from "react";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "../../store/slices/CartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  image,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-4 gap-2 items-center my-4 mx-8">
        <div className="flex items-start gap-4">
          <div className="h-12 max-w-16 mr-4">
            <img src={image} alt={title} className="object-fill" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{rating} ★ ★ ★ ★</p>
          </div>
        </div>
        <div className="text-center">${price}</div>
        <div className="flex items-center justify-center">
          <button
            className="border-gray-300 h-10 w-10  m-2 p-2 shadow-md bg-violet-300"
            onClick={() => dispatch(decreaseCartItemQuantity(productId))}
          >
            -
          </button>
          <span className="flex h-10 w-10 text-center justify-center items-center ">
            {quantity}
          </span>
          <button
            className="border-gray-300 h-10 w-10 m-2 p-2 shadow-md bg-violet-300"
            onClick={() => dispatch(increaseCartItemQuantity(productId))}
          >
            +
          </button>
        </div>
        <div className="text-center">${(quantity * price).toFixed(2)}</div>
      </div>
      <hr className="m-4" />
    </>
  );
}
