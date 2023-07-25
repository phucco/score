import axios from 'axios';

export const API_URL = 'http://score.test/api/'

const api = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config;
})


export default api