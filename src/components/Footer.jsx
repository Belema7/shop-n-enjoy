import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                {/* <FaShoppingBag className="text-white text-lg" /> */}
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ShopNEnjoy
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md text-lg">
              Your premier destination for quality products and exceptional shopping experiences. 
              We're committed to bringing you the best deals with premium service.
            </p>
            <div className="flex items-center gap-6 text-2xl">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} ShopNEnjoy. All rights reserved.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by</span>
              <span className="font-semibold text-cyan-400">Belema</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;