import axios from 'axios';
import { CustomAxiosInstanceType } from './axiosInterceptor/axiosInterceptorType';

const BASE_URL = process.env.REACT_APP_SERVER_BASEURL;

export default axios.create({
  baseURL: BASE_URL,
});

export const userCustomAxios: CustomAxiosInstanceType = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
