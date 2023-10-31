import axios from "axios";
import { STATIC_HOST_SCHOOL } from "../constants";


const token = localStorage.getItem('token') ? localStorage.getItem('token') : localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJjZTM2NjQ1MGNkNjlhYTliNGY4NjEiLCJpYXQiOjE2OTg3MTY5ODIsImV4cCI6MTY5ODcxNzU4MiwidHlwZSI6ImFjY2VzcyJ9.yQOg8JvxgvTboSRxuM0hleBq7pPAEts1GA6aXcDK0iY');

const axiosClientSchool = axios.create({
    baseURL: `${STATIC_HOST_SCHOOL}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

// Interceptor

// Add a request interceptor
axiosClientSchool.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClientSchool.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClientSchool;