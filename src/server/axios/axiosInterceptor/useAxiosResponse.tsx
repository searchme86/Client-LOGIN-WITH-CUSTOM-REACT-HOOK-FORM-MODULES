/***
 * 용도 :
 * axiosInterceptor의 Response를 담당하는 함수
 *  */

import { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import useRefreshToken from '../../auth/token/useRefreshToken';
import { CustomAxiosRequestConfig } from './axiosInterceptorType';
import { userCustomAxios } from '../axiosConfig';

import { StatusCode } from '../axiosUtils/axiosConfigData';

function useAxiosResponse() {
  const refresh = useRefreshToken();

  // axiosInterceptor에서 response를 받기 전에 값이 true 일 경우,
  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  // axiosInterceptor에서 response를 받기 전, responseError가 발생 할 경우, 실행되는 함수
  const onResponseError = async (
    responseError: AxiosError
  ): Promise<AxiosError> => {
    if (responseError.config !== undefined) {
      const prevRequest: CustomAxiosRequestConfig = responseError?.config;
      if (responseError.response && !prevRequest?.sent) {
        switch (responseError.response.status) {
          // StatusCode코드가  Unauthorized 일 경우
          case StatusCode.Unauthorized:
            prevRequest.sent = true;
            try {
              const newAccessToken = await refresh();
              if (typeof newAccessToken === 'string') {
                // prevRequest.headers![
                //   'Authorization'
                // ] = `Bearer ${newAccessToken}`;

                prevRequest['headers'] = prevRequest.headers ?? {};
                (prevRequest.headers as RawAxiosRequestHeaders)[
                  'Authorization'
                ] = `Bearer ${newAccessToken}`;

                return userCustomAxios(prevRequest);
              }
            } catch (error) {
              if (error instanceof AxiosError) {
                console.error(error);
              }
            }
            break;

          // StatusCode코드가  Forbidden일 경우
          case StatusCode.Forbidden:
            prevRequest.sent = true;
            try {
              const newAccessToken = await refresh();
              if (typeof newAccessToken === 'string') {
                prevRequest['headers'] = prevRequest.headers ?? {};
                (prevRequest.headers as RawAxiosRequestHeaders)[
                  'Authorization'
                ] = `Bearer ${newAccessToken}`;
                return userCustomAxios(prevRequest);
              }
            } catch (error) {
              if (error instanceof AxiosError) {
                console.error(error);
              }
            }
            break;
        }
      }
    }
    return Promise.reject(responseError);
  };

  return { refresh, onResponse, onResponseError };
}

export default useAxiosResponse;
