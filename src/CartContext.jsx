import { createContext, useContext } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQty: () => {},
});

export const useCart = () => useContext(CartContext);
