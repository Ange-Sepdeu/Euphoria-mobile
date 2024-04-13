import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.31.160",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export default axiosInstance;