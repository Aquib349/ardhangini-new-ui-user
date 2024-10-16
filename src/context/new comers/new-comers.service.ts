import { apiClient, handleApiError } from "../../services/axios/axios.service";

// fetch all the products from the url
// method : "get"
export const fetchAllProducts = async () => {
  try {
    const response = await apiClient.get("/product");
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// add item to cart
export const AddItemToCart = async (bodyItem: object) => {
  try {
    const response = await apiClient.post("/cart/add", bodyItem);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// add item to wishlist
export const AddItemToWishlist = async (requestBody: object) => {
  try {
    const response = await apiClient.post("/wish-list/add", requestBody);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
