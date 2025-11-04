import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken")
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
