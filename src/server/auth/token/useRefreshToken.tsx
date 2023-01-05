import axios from '../../axios/axiosConfig';
import { AxiosResponse, AxiosError } from 'axios';
import useAuth from '../context/useAuth';
import { requestRefeshTokenType } from './tokenUtils/tokenType';

function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const userRefreshedInfo: AxiosResponse<requestRefeshTokenType, any> =
        await axios.get('/refresh', {
          withCredentials: true,
        });

      const {
        data: { roles, accessToken },
      } = userRefreshedInfo;

      setAuth((currentUserInfo) => {
        return {
          ...currentUserInfo,
          roles,
          accessToken,
        };
      });

      return accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response);
        console.log('error.response', error.response);
      }
    }
  };
  return refresh;
}

export default useRefreshToken;
