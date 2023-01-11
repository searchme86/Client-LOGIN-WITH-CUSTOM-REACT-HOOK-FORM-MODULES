import axios from 'axios';
import { CustomAxiosInstanceType } from './axiosInterceptor/axiosInterceptorType';

const BASE_URL = 'http://localhost:3500';

export default axios.create({
  baseURL: BASE_URL,
});

export const userCustomAxios: CustomAxiosInstanceType = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
