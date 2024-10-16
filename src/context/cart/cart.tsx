import { createContext, ReactNode, useEffect, useState } from "react";
import { CartContextProps, CartResponse } from "./interface";
import { getCartItem, removeItemFromCart } from "./cart.service";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItemData, setCartItemData] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(false);

  // function to fetch the cart item data
  async function fetchCartData() {
    const userId = "01c0c1b7-31ab-4e63-8a5a-464164310947";
    setLoading(true);
    try {
      const data: CartResponse = await getCartItem(userId);
      setCartItemData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // function to remove the item from the cart
  async function removeItem(
    productId: string,
    typeId: string,
    quantity: number
  ) {
    const userId = "01c0c1b7-31ab-4e63-8a5a-464164310947";
    const body = {
      userId: userId,
      lineItems: [
        {
          productId: productId,
          typeId: typeId,
          quantity: 0,
        },
      ],
    };
    setLoading(true);
    try {
      const data: CartResponse = await removeItemFromCart(body);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      fetchCartData();
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <CartContext.Provider value={{ cartItemData, removeItem, fetchCartData }}>
      {children}
    </CartContext.Provider>
  );
};
