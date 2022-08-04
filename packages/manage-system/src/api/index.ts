import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { AxiosError } from 'axios';

const request = axios.create({
    baseURL: import.meta.env.MODE !== 'production' ? '/api' : '',
})

export default request;
