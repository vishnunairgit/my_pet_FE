// import axios from "axios";
// import { BASE_URL } from "../constants/BaseUrl";

// const AxiosInstance=axios.create({
//     baseURL:BASE_URL
// });

// AxiosInstance.interceptors.request.use(function(config){
//         const token = localStorage.getItem('token')
//         config.headers['Authorization']= 'Bearer ' + token // Add a space after 'Bearer'
//         config.headers['Access-control-Allow-orgin'] ='*'
//         return config
// })
// export default AxiosInstance;

import axios from "axios";
import { BASE_URL } from "../constants/BaseUrl";

const AxiosInstance = axios.create({
    baseURL: BASE_URL
});

AxiosInstance.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token; // Add a space after 'Bearer'
    }
    return config;
}, function(error) {
    // Handle request error
    return Promise.reject(error);
});

export default AxiosInstance;
