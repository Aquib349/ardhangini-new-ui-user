import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// create an instance of axios with the base url 
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Handle API errors
export const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    // Handle Axios-specific errors
    console.error("API error:", error.response?.data || error.message);
  } else {
    // Handle non-Axios errors
    console.error("Unexpected error:", error);
  }
};