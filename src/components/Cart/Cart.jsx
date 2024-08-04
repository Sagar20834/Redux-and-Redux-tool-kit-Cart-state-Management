import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <h2 className="text-4xl text-center">Items in Your Cart</h2>

      <div className="grid grid-cols-4 gap-2 text-xl font-semibold mb-2 text-center mx-8">
        <div className="cart-item">Item</div>
        <div className="item-price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="total">Total</div>
      </div>
      <hr />
      <div className="mx-2">
        {cartItems.map(
          ({ productId, title, rating, price, image, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              image={image}
              rating={rating}
            />
          )
        )}
      </div>

      <div className="text-end font-bold text-3xl my-4 mr-8">
        Total: $
        {cartItems
          .reduce(
            (accumulator, currentItem) =>
              accumulator + currentItem.quantity * currentItem.price,
            0
          )
          .toFixed(2)}
      </div>
    </>
  );
}
