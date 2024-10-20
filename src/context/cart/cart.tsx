import React, { createContext, ReactNode, useEffect, useState } from "react";
import { CartContextProps, CartResponse, OrderResponse } from "./interface";
import { getCartItem, placeOrder, removeItemFromCart } from "./cart.service";
import { toastService } from "../../services/toast/toast.service";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItemData, setCartItemData] = useState<CartResponse | null>(null);
  const [itemLength, setItemLength] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fetch cart item data
  const fetchCartData = async (): Promise<void> => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    setLoading(true);
    try {
      const data = await getCartItem(userId);
      if (data && Array.isArray(data.cartLineItems)) {
        setCartItemData(data);
        setItemLength(data.cartLineItems.length);
      } else {
        setItemLength(0);
      }
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
      setItemLength(0);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from the cart
  const removeItem = async (
    productId: string,
    typeId: string
  ): Promise<void> => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    const body = {
      userId,
      lineItems: [{ productId, typeId, quantity: 0 }],
    };

    setLoading(true);
    try {
      await removeItemFromCart(body);
      setCartItemData((prevData) => {
        if (!prevData) return null;

        const updatedItems = prevData.cartLineItems.filter(
          (item) => item.productId !== productId
        );
        setItemLength(updatedItems.length);

        return {
          ...prevData,
          cartLineItems: updatedItems,
        };
      });

      toastService.showToast("Item removed from cart", "success", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Failed to remove item:", error);
      toastService.showToast("Failed to remove item", "error", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // Place an order
  const placeOrders = async (
    orderType: string,
    deliveryAddress: string,
    billingAddress: string,
    paymentMethod: string,
    quantity: number
  ): Promise<void> => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    const body = {
      userId,
      orderType,
      deliveryAddress,
      billingAddress,
      paymentMethod,
    };

    setLoading(true);
    try {
      const data: OrderResponse = await placeOrder(body);
      if (data) {
        toastService.dismissToast();
        toastService.showToast("Item ordered successfully", "success", {
          position: "top-center",
        });
        navigate("/orders");
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      toastService.dismissToast();
      toastService.showToast("Order failed!", "error", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart data when component mounts
  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItemData,
        removeItem,
        fetchCartData,
        placeOrders,
        itemLength, // Make sure itemLength is being passed
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
