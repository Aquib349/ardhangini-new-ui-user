import { apiClient, handleApiError } from "../../services/axios/axios.service"

// fetch all the products from the url
// method : "get" 
export const fetchAllProducts = async () => {
    try {
        const response = await apiClient.get('/product');
        return response.data
    } catch (error) {
        handleApiError(error);
        throw error;
    }
}