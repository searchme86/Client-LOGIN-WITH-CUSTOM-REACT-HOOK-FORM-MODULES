import {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInterceptorManager,
} from 'axios';

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  sent?: boolean;
}

export interface CustomAxiosInstanceType extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
}

export const enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
}

export type AxiosContentType =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'mutipart/form-data';
