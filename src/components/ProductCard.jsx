import { section } from "framer-motion/client";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-indigo-600 font-bold">${product.price}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
    
  );
};

export default ProductCard;
