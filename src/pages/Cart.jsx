import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, Truck } from "lucide-react";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
          <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <span className="text-5xl">🛒</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Discover amazing products and add them to your cart to get started!
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 font-semibold shadow-lg hover:shadow-cyan-500/25"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-xl">🛒</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
              <p className="text-gray-400 mt-1">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-2 transition duration-200 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg"
          >
            <Trash2 size={20} />
            Clear All
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 object-contain flex-shrink-0 bg-gray-900 rounded-xl p-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white line-clamp-2 leading-tight group-hover:text-cyan-300 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-sm text-cyan-400 mt-1 capitalize font-medium">
                          {item.category}
                        </p>
                        <p className="text-lg font-bold text-cyan-400 mt-2">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item })}
                          className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-200 text-white font-semibold hover:border hover:border-cyan-400/50"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="w-12 text-center font-semibold text-white text-lg">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item })}
                          className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-200 text-white font-semibold hover:border hover:border-cyan-400/50"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-cyan-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                          className="text-red-400 hover:text-red-300 text-sm font-medium mt-1 transition duration-200 flex items-center gap-1"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary - Takes 1/3 on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="text-white font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400 font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%)</span>
                  <span className="text-white font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-cyan-400">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-lg">
                Proceed to Checkout
              </button>
              
              <Link
                to="/"
                className="w-full text-center block mt-4 text-cyan-400 hover:text-cyan-300 font-medium transition duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Truck size={20} />
                  <p className="text-sm font-medium">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <span>🔒</span>
                  <span>Secure checkout guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;