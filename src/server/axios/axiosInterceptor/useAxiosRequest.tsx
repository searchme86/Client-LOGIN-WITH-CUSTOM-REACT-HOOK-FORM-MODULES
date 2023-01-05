/***
 * 용도 :
 * axiosInterceptor의 Request를 담당하는 함수
 *  */

import { AxiosRequestConfig, AxiosError } from 'axios';
import useAuth from '../../auth/context/useAuth';

function useAxiosRequest() {
  const { auth } = useAuth();

  // axiosInterceptor에서 request를 하기 전에 true 일 경우,
  const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
    if (!request.headers) {
      request['headers'] = request.headers ?? {};
      request.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
    }
    // if (!request.headers!['Authorization']) {
    //   request.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
    // }
    return request;
  };

  // axiosInterceptor에서 request를 하기 전에 에러가 발생할 경우,
  const onRequestError = (requestError: AxiosError): Promise<AxiosError> =>
    Promise.reject(requestError);

  return { auth, onRequest, onRequestError };
}

export default useAxiosRequest;
