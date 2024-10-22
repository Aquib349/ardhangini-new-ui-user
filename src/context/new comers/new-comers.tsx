import { createContext, ReactNode, useEffect, useState } from "react";
import {
  CartResponse,
  NewComersProps,
  Product,
  ProductResponse,
  wishlistResponse,
} from "./interface";
import {
  AddItemToCart,
  AddItemToWishlist,
  fetchAllProducts,
} from "./new-comers.service";
import { useCart } from "../../hooks/use-cart";
import { useWishlist } from "../../hooks/use-wishlist";
import { toastService } from "../../services/toast/toast.service";

// Create context with an undefined initial value
export const productContext = createContext<NewComersProps | undefined>(
  undefined
);

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { fetchCartData } = useCart();
  const { fetchWishlistItem } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch all products
  const fetchAllProduct = async () => {
    setLoading(true);
    setError(null);

    try {
      const data: ProductResponse = await fetchAllProducts();
      setProducts(data.items);
      setMeta(data.meta);
    } catch (error: any) {
      console.error("Error fetching product:", error);
      setError(error.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  // Function to add item to cart
  const addItemCart = async (productId: string, typeId: string) => {
    setLoading(true);
    const userId = localStorage.getItem("userId"); 

    if (!userId) {
      toastService.showToast("User ID not found. Please log in.", "error", {
        position: "top-center",
      });
      setLoading(false);
      return;
    }

    const body = {
      userId,
      lineItems: [
        {
          productId,
          typeId,
          quantity: 0, 
        },
      ],
    };

    try {
      const data: CartResponse = await AddItemToCart(body);
      toastService.showToast("Item added to cart successfully", "success", {
        position: "top-center",
      });
      return data;
    } catch (error: any) {
      setError("Failed to add item to cart.");
      toastService.showToast(error.message || "Failed to add item.", "error", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
      fetchCartData(); 
    }
  };

  // Function to add item to wishlist
  const addItemWishlist = async (productId: string, typeId: string) => {
    setLoading(true);
    toastService.showToast("Adding...", "loading", {
      position: "top-center",
    });

    const userId = localStorage.getItem("userId"); 

    if (!userId) {
      toastService.showToast("User ID not found. Please log in.", "error", {
        position: "top-center",
      });
      setLoading(false);
      return;
    }

    const body = {
      userId,
      lineItems: [
        {
          productId,
          typeId,
        },
      ],
    };

    try {
      const data: wishlistResponse = await AddItemToWishlist(body);
      toastService.dismissToast();
      toastService.showToast("Item added to wishlist", "success", {
        position: "top-center",
      });
      return data;
    } catch (error: any) {
      setError("Failed to add item to wishlist.");
      toastService.showToast(error.message || "Failed to add item.", "error", {
        position: "top-center",
      });
    } finally {
      fetchWishlistItem(); 
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProduct(); 
  }, []);

  return (
    <productContext.Provider
      value={{ products, meta, addItemCart, addItemWishlist}} 
    >
      {children}
    </productContext.Provider>
  );
};
