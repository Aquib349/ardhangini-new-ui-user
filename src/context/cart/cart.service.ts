import { apiClient, handleApiError } from "../../services/axios/axios.service";

// method : "get" => get all the items added to cart
export async function getCartItem(userId: string) {
  try {
    const response = await apiClient.get(`/cart/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

// method : "DELETE" => remove item from the cart
export async function removeItemFromCart(itemBody: object) {
  try {
    const response = await apiClient.post("/cart/remove", itemBody);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

// method : "POST" => place an order
export async function placeOrder(orderBody: object) {
  try {
    const response = await apiClient.post("/order-details", orderBody);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}
