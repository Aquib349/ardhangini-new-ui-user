// UserOrderContext.tsx
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AllOrderProps } from "./interface"; // Ensure that Order is defined in your interface file
import { getAllUserOrders } from "./order.service";

// Create context with an undefined initial value
export const userOrderContext = createContext<AllOrderProps | undefined>(
  undefined
);

export const UserOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [AllOrders, setAllOrders] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 

  // Function to get all the orders of the user
  const getAllOrders = async () => {
    const userId = localStorage.getItem("userId"); 
    if (!userId) {
      setError("User ID not found. Please log in.");
      return;
    }

    setLoading(true);
    try {
      const data = await getAllUserOrders(userId);
      setAllOrders(data);
    } catch (error: any) {
      console.error("Error fetching user orders:", error);
      setError(error.message || "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <userOrderContext.Provider value={{ AllOrders }}>
      {children}
    </userOrderContext.Provider>
  );
};
