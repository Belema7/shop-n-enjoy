// src/context/CartContext.jsx
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer, initialState } from "../reducer/CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);