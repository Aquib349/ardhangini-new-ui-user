import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "./interface"; // Assuming Product represents an individual product
import { fetchAllProducts } from "./new-comers.service";

interface ProductResponse {
  items: Product[];
  meta: Record<string, any>; // Define this more specifically if you know the shape of meta
}

interface NewComersProps {
  products: Product[];
  meta: Record<string, any>;
}

// Create context with an undefined initial value
export const productContext = createContext<NewComersProps | undefined>(
  undefined
);

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch all products
  async function fetchAllProduct() {
    setLoading(true);
    setError(null);
    try {
      const data: ProductResponse = await fetchAllProducts(); // Expecting data to be { items: [], meta: {} }
      setProducts(data.items);
      setMeta(data.meta);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to fetch product.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    // Provide context value to children
    <productContext.Provider value={{ products, meta }}>
      {children}
    </productContext.Provider>
  );
};
