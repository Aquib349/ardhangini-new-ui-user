import { useContext } from "react";
import { wishlistContext } from "../context/wishlist/wishlist";

export const useWishlist = () => {
  const context = useContext(wishlistContext);
  if (!context) {
    throw new Error("context must be within the contextProvider");
  }

  return context;
};
