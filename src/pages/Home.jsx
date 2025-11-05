import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext"; // import CartContext

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart(); // access dispatch

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // prevent navigating to product details when clicking button
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-600">
        🌀 Loading awesome deals...
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🛍️ Welcome to Shop-n-Enjoy
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/productdetails/${product.id}`}
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-contain p-4"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {product.category.toUpperCase()}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg transition-all duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
