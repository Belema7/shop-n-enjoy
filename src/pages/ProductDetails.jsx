import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-300 font-semibold text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Product Not Found</h2>
          <p className="text-gray-400 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 font-semibold"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 w-full max-w-lg">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={product.image}
                alt={product.title}
                className={`w-full h-96 object-contain transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category & Title */}
            <div className="mb-6">
              <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium capitalize mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating?.rate) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-cyan-400 font-semibold">
                  {product.rating?.rate}
                </span>
                <span className="text-gray-400 text-sm">
                  ({product.rating?.count} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <Truck size={20} className="text-cyan-400" />
                <span className="text-white text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <Shield size={20} className="text-cyan-400" />
                <span className="text-white text-sm font-medium">2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <RotateCcw size={20} className="text-cyan-400" />
                <span className="text-white text-sm font-medium">30-Day Returns</span>
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Price</p>
                  <p className="text-4xl font-bold text-cyan-400">
                    ${product.price}
                  </p>
                </div>
                
                <button
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  <ShoppingCart size={24} />
                  Add to Cart
                </button>
              </div>

              {/* Stock Status */}
              <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">In Stock</span>
                  <span className="text-gray-400 text-sm">Ready to ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Product Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">Category</span>
                <span className="text-white font-medium capitalize">{product.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">Rating</span>
                <span className="text-cyan-400 font-medium">{product.rating?.rate} / 5</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">Reviews</span>
                <span className="text-white font-medium">{product.rating?.count}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Shipping Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-400">
                <Truck size={20} />
                <span className="font-medium">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400">
                <Shield size={20} />
                <span className="font-medium">Secure checkout</span>
              </div>
              <div className="flex items-center gap-3 text-blue-400">
                <RotateCcw size={20} />
                <span className="font-medium">Easy returns within 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;