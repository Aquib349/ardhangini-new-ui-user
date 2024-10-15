import { apiClient, handleApiError } from "@/src/services/axios/axiso.service"

// fetch all the products from the url
// method : "get" 
export const fetchAllProducts = async (id : any) => {
    try {
        const response = await apiClient.get(`/product/:${id}`)
        return response.data
    } catch (error) {
        handleApiError(error);
        throw error;
    }
}