import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (id) {
    fetchProduct();
  }
}, [id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-600">
        🌀 Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-600 mt-20">
        ❌ Product not found!
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
    <div className="max-w-5xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-semibold"
      >
        ← Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-gray-500 italic mb-3">{product.category}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg">⭐ {product.rating?.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-green-600">
              ${product.price}
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
