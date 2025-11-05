import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const menuItems = ["Home", "Cart", "Checkout"];

  // calculate total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">🛍️</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ShopNEnjoy
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Button (Desktop) */}
        <NavLink
          to="/cart"
          className="hidden md:flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 relative group"
        >
          <ShoppingCart size={20} />
          <span>Cart</span>
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
            >
              {totalItems}
            </motion.span>
          )}
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden"
          >
            <ul className="flex flex-col py-4 space-y-2 font-medium">
              {menuItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block px-6 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-gray-700 text-cyan-400 border-l-4 border-cyan-400 font-semibold"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              
              {/* Mobile Cart Button */}
              <li className="px-6 py-3">
                <NavLink
                  to="/cart"
                  className="flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart size={20} />
                  <span>Cart ({totalItems})</span>
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;