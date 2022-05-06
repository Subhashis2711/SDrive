import axios from 'axios';
import config from "../src/app/config";

const baseURL = config.apiBaseURL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access')
			? 'Bearer ' + localStorage.getItem('access')
			: null,
        "Content-Type": "application/json",
        accept: "application/json",
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
