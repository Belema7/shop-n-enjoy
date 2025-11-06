import React from 'react'
import { NavLink } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Minimal Brand Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">🛍️</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ShopNEnjoy
            </span>
          </NavLink>
        </div>
      </div>

      {/* 404 Content */}
      <div className="flex flex-col justify-center items-center text-center px-4 min-h-[80vh]">
        <div className="text-9xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
          404
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <NavLink
          to="/"
          className="group flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-lg"
        >
          <Home size={20} />
          Return to Homepage
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;