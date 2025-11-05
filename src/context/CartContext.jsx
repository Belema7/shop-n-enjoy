import React, { createContext, useReducer, useContext, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [], () => {
    // Initialize from localStorage
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const useCart = () => useContext(CartContext);
