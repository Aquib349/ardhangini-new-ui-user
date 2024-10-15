import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "./interface";
import { fetchAllProducts } from "./new-comers.service";

interface NewComersProps {
  product: Product[];
}

// Create context with an undefined initial value
export const productContext = createContext<NewComersProps | undefined>(
  undefined
);

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // function to fetch all products
  async function fetchAllProduct() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllProducts(1);
      setProducts(data);
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
    <productContext.Provider value={{ product: products }}>
      {children}
    </productContext.Provider>
  );
};
