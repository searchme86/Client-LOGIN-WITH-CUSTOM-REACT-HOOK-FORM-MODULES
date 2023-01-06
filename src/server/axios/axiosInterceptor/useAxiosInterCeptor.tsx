/***
 * 용도 :
 * axiosInterceptor를 설정하는 컴포넌트
 *  */

import { useEffect } from 'react';
import { userCustomAxios } from '../axiosCustom';
import useAxiosRequest from './useAxiosRequest';
import useAxiosResponse from './useAxiosResponse';

function useAxiosInterCeptor() {
  // interceptor의 Request/Response 함수를 가져옴
  const { auth, onRequest, onRequestError } = useAxiosRequest();
  const { onResponse, onResponseError } = useAxiosResponse();

  useEffect(() => {
    const requestIntercept = userCustomAxios.interceptors.request.use(
      onRequest,
      onRequestError
    );

    const responseIntercept = userCustomAxios.interceptors.response.use(
      onResponse,
      onResponseError
    );

    return () => {
      userCustomAxios.interceptors.request.eject(requestIntercept);
      userCustomAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, onRequest, onRequestError, onResponse, onResponseError]);

  return userCustomAxios;
}

export default useAxiosInterCeptor;
