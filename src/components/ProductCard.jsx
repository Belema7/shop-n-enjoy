import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain bg-gray-800 group-hover:scale-105 transition-transform duration-300 p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h2 className="text-lg font-semibold text-white line-clamp-2 mb-2 group-hover:text-cyan-300 transition-colors duration-200">
          {product.name}
        </h2>
        <p className="text-cyan-400 font-bold text-xl mb-4">${product.price}</p>
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;