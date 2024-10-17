import { apiClient, handleApiError } from "../../services/axios/axios.service";

// method : "GET" => get the user address
export const getUserAddress = async (userId: string) => {
  try {
    const response = await apiClient.get(`/delivery-address/user/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// method : "POST" => add user address
export const addAddress = async (addressBody: object) => {
  try {
    const response = await apiClient.post("/delivery-address", addressBody);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// method : "DELETE" => delete the user address
export const deleteAddress = async (addressId: string) => {
  try {
    const response = await apiClient.delete(`/delivery-address/${addressId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
