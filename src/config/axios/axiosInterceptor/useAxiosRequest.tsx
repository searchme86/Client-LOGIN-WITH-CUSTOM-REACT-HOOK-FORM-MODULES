import { AxiosRequestConfig, AxiosError } from 'axios';
import { useStateContext } from '@context/index';

function useAxiosRequest() {
  const { contextValue } = useStateContext();

  const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
    if (!request.headers) {
      request['headers'] = request.headers ?? {};
      request.headers![
        'Authorization'
      ] = `Bearer ${contextValue?.authUser.accessToken}`;
    }
    // if (!request.headers!['Authorization']) {
    //   request.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
    // }
    return request;
  };

  const onRequestError = (requestError: AxiosError): Promise<AxiosError> =>
    Promise.reject(requestError);

  return { contextValue, onRequest, onRequestError };
}

export default useAxiosRequest;
