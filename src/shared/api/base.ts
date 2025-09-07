import { type IApiError } from '../models';
import axios, { isAxiosError } from "axios";

const BASE_URL = 'https://realworld.habsida.net/api';

const apiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

apiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

apiInstance.interceptors.response.use(

    (response) => response,

    (error) => {

        let apiError: IApiError;

         if (isAxiosError(error)) {
            if (error.response) {
                apiError = {
                    status: error.response.status,
                    data: error.response.data,
                    message: error.message
                };
            } else if (error.request) {
                apiError = {
                    status: 0,
                    data: null,
                    message: 'Ошибка подключения к серверу'
                };
            } else {
                apiError = {
                    status: 0,
                    data: null,
                    message: 'Ошибка настройки запроса'
                };
            }

            return Promise.reject(apiError);
        }
    }
)


export default apiInstance;