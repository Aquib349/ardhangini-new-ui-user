import { createContext, ReactNode, useEffect, useState } from "react";
import { wishlistProps, WishlistResponse } from "./interface";
import { getWishlistItem, RemoveWishlistItem } from "./wishlist.service";
import { wishlistResponse } from "../new comers/interface";

export const wishlistContext = createContext<wishlistProps | undefined>(
  undefined
);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlistData, setWishlistData] = useState<WishlistResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");

  // function to get wishlist data
  async function fetchWishlistItem() {
    if (!userId) {
      return;
    }
    setLoading(true);
    try {
      const data: WishlistResponse = await getWishlistItem(userId);
      setWishlistData(data);
    
    } catch (error) {
      console.log(error);
    }
  }

  // function to remove the item from the wishlist
  async function DeleteWishlistItem(
    productId: string | undefined,
    typeId: string
  ) {
    setLoading(true);
    if (!userId) {
      console.log("no user id");
      return;
    }
    const body = {
      userId: userId,
      lineItems: [
        {
          productId: productId,
          typeId: typeId,
        },
      ],
    };
    try {
      const data: wishlistResponse = await RemoveWishlistItem(body);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      fetchWishlistItem();
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWishlistItem();
  }, []);

  return (
    <wishlistContext.Provider
      value={{ wishlistData, fetchWishlistItem, DeleteWishlistItem }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
