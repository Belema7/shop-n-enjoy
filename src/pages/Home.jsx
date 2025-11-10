import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {


  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gray-800 to-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🛍️ <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shop-n-Enjoy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover premium products with exclusive deals. Elevate your shopping experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="products" 
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              Shop Now
            </Link>
            <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 px-8 py-3 rounded-xl font-semibold transition-all duration-200">
              <Link to='about'>
                Learn More
              </Link>
            </button>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

       {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Shipping</h3>
              <p className="text-gray-400">On orders over $50</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Payment</h3>
              <p className="text-gray-400">100% secure transactions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Returns</h3>
              <p className="text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;