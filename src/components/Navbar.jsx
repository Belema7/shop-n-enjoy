import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Cart", "Checkout"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Shop<span className="text-pink-500">N</span>Enjoy
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-indigo-600 transition duration-200 ${
                    isActive
                      ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                      : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Button (Desktop) */}
        <NavLink
          to="/cart"
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          🛒 View Cart
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-50 border-t border-gray-200"
          >
            <ul className="flex flex-col items-center py-4 space-y-3 font-medium text-gray-700">
              {menuItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `hover:text-indigo-600 transition duration-200 ${
                        isActive ? "text-indigo-600 font-semibold" : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)} // close menu after click
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <NavLink
                to="/cart"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                🛒 View Cart
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
