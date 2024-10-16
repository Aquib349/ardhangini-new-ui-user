import { useContext } from "react";
import { CartContext } from "../context/cart/cart";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("context must be within contextProvider");
  }

  return context;
};
