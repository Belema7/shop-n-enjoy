// components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group hover:-translate-y-1 h-full flex flex-col">
      <Link to={`/productdetails/${product.id}`} className="block flex-1">
        <div className="relative overflow-hidden flex-1">
          <img
            src={product.image}
            alt={product.title || product.name}
            className="w-full h-64 object-contain bg-gray-900 group-hover:scale-110 transition-transform duration-500 p-6"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white line-clamp-2 mb-2 group-hover:text-cyan-300 transition-colors duration-200">
              {product.title || product.name}
            </h3>
            <p className="text-cyan-400 text-sm font-medium mb-3 capitalize">
              {product.category}
            </p>
          </div>
        </div>
      </Link>
      
      <div className="p-6 pt-0 flex justify-between items-center mt-auto border-t border-gray-700">
        <span className="text-2xl font-bold text-cyan-400">
          ${product.price}
        </span>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
        >
          <span>+</span>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;