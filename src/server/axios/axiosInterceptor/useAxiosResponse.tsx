import { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import useAuthRefreshToken from '../../auth/useAuthRefreshToken';
import { userCustomAxios } from '../axiosCustom';
import { StatusCode, CustomAxiosRequestConfig } from '../axiosType';

function useAxiosResponse() {
  const refresh = useAuthRefreshToken();

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

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
