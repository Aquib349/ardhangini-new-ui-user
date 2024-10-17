// UserOrderContext.tsx
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AllOrderProps } from "./interface";
import { getAllUserOrders } from "./order.service";

export const userOrderContext = createContext<AllOrderProps | undefined>(
  undefined
);

export const UserOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [AllOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // function to get all the orders of user
  async function getAllOrders() {
    const userId = "01c0c1b7-31ab-4e63-8a5a-464164310947";
    setLoading(true);
    try {
      const data = await getAllUserOrders(userId);
      setAllOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <userOrderContext.Provider value={{ AllOrders: AllOrders }}>
      {children}
    </userOrderContext.Provider>
  );
};
