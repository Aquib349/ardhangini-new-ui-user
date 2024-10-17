import { useContext } from "react";
import { userOrderContext } from "../context/orders/orders";

export const useOrders = () => {
  const context = useContext(userOrderContext);
  if (!context) {
    throw new Error("context must be within the contextProvider");
  }

  return context;
};
