import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import { productsList } from "../../store/productsList";

const Homepage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 ">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {productsList.map(({ id, image, title, rating, price }) => (
          <ProductCard
            key={id}
            productId={id}
            image={image}
            title={title}
            rating={rating.rate}
            price={price}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
