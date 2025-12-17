import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore.js";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor: attach access token
http.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }
  return config;
});

// Response interceptor: global error handling
http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore();
      authStore.clear(); // Auto logout on 401
    }
    return Promise.reject(error.response || error);
  }
);

export default http;
