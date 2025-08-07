import axios from "axios";
import { useAuthStore } from "../_stores/auth";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.getState().reset();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;