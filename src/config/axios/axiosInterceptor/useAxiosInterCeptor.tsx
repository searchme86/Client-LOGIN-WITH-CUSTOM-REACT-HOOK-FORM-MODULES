import { useEffect } from 'react';
import { userCustomAxios } from '@config/axios/axiosCustom';
import useAxiosRequest from './useAxiosRequest';
import useAxiosResponse from './useAxiosResponse';

function useAxiosInterCeptor() {
  const { contextValue, onRequest, onRequestError } = useAxiosRequest();
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
  }, [contextValue, onRequest, onRequestError, onResponse, onResponseError]);

  return userCustomAxios;
}

export default useAxiosInterCeptor;
