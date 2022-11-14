import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { useAuthStore } from '@/stores'

const config: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}

const client: AxiosInstance = axios.create(config)

client.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${useAuthStore().token}`
    }
    return config;
})

client.interceptors.response.use(
    response => Promise.resolve(response),
    error => {
        if (error.response.status === 401 || error.response.status === 403) useAuthStore().logout()
        throw error
    }
)

export default client
