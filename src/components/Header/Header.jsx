import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <>
      <div className="h-16 bg-red-300 mb-8">
        <div className=" flex  justify-between items-center  p-4 mx-2">
          <h1 className="text-3xl font-bold">
            <Link to="/">Shopee</Link>
          </h1>
          <Link to="/cart">
            <div className="flex  mr-6">
              <FaCartShopping className="text-violet-800" size={36} />
              <span className=" font-bold absolute -top-0 right-6">
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.quantity;
                }, 0)}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
