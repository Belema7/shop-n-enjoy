import React from "react";
import ProductCard from "../components/ProductCard";
import { section } from "framer-motion/client";
import Navbar from "../components/Navbar";

// Sample product data (you can move this to utils/productsData.js later)
import headphones from "../assets/images/headphones.jpg";
import smartwatch from "../assets/images/smartwatch.jpg";
import sneakers from "../assets/images/sneakers.jpg";
import backpack from "../assets/images/backpack.jpg";

// Sample product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, image: headphones },
  { id: 2, name: "Smart Watch", price: 99.99, image: smartwatch },
  { id: 3, name: "Sneakers", price: 79.99, image: sneakers },
  { id: 4, name: "Backpack", price: 49.99, image: backpack },
];

const Home = () => {
  return (
    <section>
        <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
          Welcome to <span className="text-pink-500">ShopNEnjoy</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Discover amazing products and shop with ease
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Home;
