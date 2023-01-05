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
