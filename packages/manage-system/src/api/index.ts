import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosError } from 'axios';

const request = axios.create({
    // baseURL: import.meta.env.MODE !== 'production' ? '/api' : '',
    // baseURL: 'http://127.0.0.1:4523/m1/1398177-0-default',
    baseURL: 'https://mock.apifox.cn/m1/1398177-0-default', // 401
    headers: { 'apifoxToken' : 'lYbT3i6QXL13rzJzPnENoOcKOIeCRtsC' } // token
})


export default request;
