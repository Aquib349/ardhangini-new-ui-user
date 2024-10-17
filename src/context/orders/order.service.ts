import { apiClient, handleApiError } from "../../services/axios/axios.service";

// method : "GET" => get all the orders of user
export const getAllUserOrders = async (userId: string) => {
  try {
    const response = await apiClient.get(`/order-details/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
