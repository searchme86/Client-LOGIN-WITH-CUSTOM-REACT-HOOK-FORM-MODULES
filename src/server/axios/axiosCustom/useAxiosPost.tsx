import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import axios from '../axiosCustom';

function useAxiosPost<T, R>(
  url: string,
  args: T
): {
  response: R | null;
  axiosPost: () => void;
  loading: boolean;
  errorMessage: string;
} {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [response, setResponse] = useState<R | null>(null);

  const axiosPost = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.post<R>(url, JSON.stringify(args), {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      setResponse(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (!error?.response) {
          setErrorMessage('No Server Response');
        } else if (error.response?.status === 400) {
          setErrorMessage('Missing Username or Password');
        } else if (error.response?.status === 401) {
          setErrorMessage('Unauthorized');
        } else {
          setErrorMessage('Login Failed');
        }
      }
    } finally {
      setLoading(false);
    }
  }, [url, args]);

  return { response, axiosPost, loading, errorMessage };
}

export default useAxiosPost;
