import { apiClient, handleApiError } from "@/src/services/axios/axiso.service";

// method : "post"  => add item to cart
export async function AddItemToCart(postBody: object) {
  try {
    const response = await apiClient.post("/cart/add", postBody);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

// method : "get" => get all the items added to cart
export async function getCartItem() {
  try {
    const response = await apiClient.get("/cart");
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}
