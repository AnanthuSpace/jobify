import axios from "axios";
import { localhostURL } from "../util/url";

const adminAxiosInstance = axios.create({
    baseURL: localhostURL 
});

adminAxiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem("adminAccessToken");
        const refreshToken = sessionStorage.getItem("adminRefreshToken");
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken, refreshToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); 
    }
);

export default adminAxiosInstance;