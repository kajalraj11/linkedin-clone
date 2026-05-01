import axios from "axios";

const getBaseURL = () => {
    if (import.meta.env.MODE === "development") {
        return "http://localhost:5000/api/v1";
    }
    const backendUrl = import.meta.env.VITE_API_URL || "https://linkedin-clone-backend.onrender.com";
    return `${backendUrl}/api/v1`;
};

const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true
});

export default axiosInstance;