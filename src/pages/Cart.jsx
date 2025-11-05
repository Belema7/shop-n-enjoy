import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="p-6 text-center text-gray-600">
          🛒 Your cart is empty! <br />
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Go back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h1>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain mb-2 md:mb-0"
              />

              <div className="flex-1 md:ml-4 text-center md:text-left">
                <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-gray-700 font-bold mt-1">${item.price}</p>
              </div>

              <div className="flex items-center gap-2 mt-2 md:mt-0">
                {/* Decrement */}
                <button
                  onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item })}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                >
                  -
                </button>

                <span className="px-3 py-1">{item.quantity}</span>

                {/* Increment */}
                <button
                  onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item })}
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                >
                  +
                </button>

                {/* Remove */}
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Price & Checkout */}
        <div className="mt-6 flex justify-end items-center gap-6">
          <span className="text-2xl font-bold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
