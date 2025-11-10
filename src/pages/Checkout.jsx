import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Check, ArrowLeft, CreditCard, MapPin, User } from "lucide-react";

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const totalAmount = subtotal + tax;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch({ type: "CLEAR_CART" });
  };

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="max-w-2xl mx-auto mt-16 p-6 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-400" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-400 text-lg mb-2">
              Thank you for shopping with ShopNEnjoy.
            </p>
            <p className="text-gray-400 mb-8">
              Your order confirmation will be sent to your email.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <CreditCard className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Checkout</h1>
            <p className="text-gray-400">Complete your purchase</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-cyan-400" size={20} />
                <h2 className="text-xl font-semibold text-white">Personal Information</h2>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-cyan-400" size={20} />
                <h2 className="text-xl font-semibold text-white">Shipping Address</h2>
              </div>
              
              <textarea
                name="address"
                placeholder="Full Delivery Address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Payment Information */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-cyan-400" size={20} />
                <h2 className="text-xl font-semibold text-white">Payment Information</h2>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-700 last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain bg-gray-700 rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-cyan-400 text-sm">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <span className="text-white font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-bold text-cyan-400">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25"
              >
                Place Order
              </button>

              {/* Security Note */}
              <div className="mt-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <span>🔒</span>
                  <span>Your payment is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;