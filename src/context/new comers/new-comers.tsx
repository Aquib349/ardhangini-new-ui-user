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
  async function fetchAllProduct() {
    setLoading(true);
    setError(null);

    try {
      const data: ProductResponse = await fetchAllProducts();
      setProducts(data.items);
      setMeta(data.meta);
    } catch (error) {
      console.error("Error fetching product:", error);

      toastService.dismissToast();
      setError("Failed to fetch product.");
      toastService.showToast("Failed to fetch item.", "error", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  }

  // function to add item to cart
  async function addItemCart(productId: string, typeId: string) {
    setLoading(true);
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
    try {
      const data: CartResponse = await AddItemToCart(body);
      return data;
    } catch (error) {
      toastService.dismissToast();
      setError("Failed to add item to cart.");
      toastService.showToast("Failed to add item.", "error", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
      fetchCartData();
    }
  }

  // function to add item to wishlist
  async function addItemWishlist(productId: string, typeId: string) {
    setLoading(true);
    toastService.showToast("Adding...", "loading", {
      position: "top-center",
    });
    const userId = "01c0c1b7-31ab-4e63-8a5a-464164310947";
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
      const data: wishlistResponse = await AddItemToWishlist(body);
      toastService.dismissToast();
      toastService.showToast("Item Added to wishlist", "success", {
        position: "top-center",
      });
      return data;
    } catch (error) {
      toastService.dismissToast();
      setError("Failed to add item to wishlist.");
      toastService.showToast("Failed to add item.", "error", {
        position: "top-center",
      });
    } finally {
      fetchWishlistItem();
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    // Provide context value to children
    <productContext.Provider
      value={{ products, meta, addItemCart, addItemWishlist }}
    >
      {children}
    </productContext.Provider>
  );
};
