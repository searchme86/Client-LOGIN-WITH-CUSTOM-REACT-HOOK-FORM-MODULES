import axios from '../axios/axiosCustom';
import { AxiosResponse, AxiosError } from 'axios';
import { useStateContext } from '../../context/NewContext';
import { contextActionCreator } from '../../context/NewContextType';

interface requestRefeshTokenType {
  // roles: number[];
  // accessToken: string;
  LoginUserNickname: string;
  userProfileImage: string[];
  roles?: number[];
  accessToken?: string;
}

function useRefreshToken() {
  const { dispatch } = useStateContext();

  const refresh = async () => {
    try {
      const userRefreshedInfo: AxiosResponse<requestRefeshTokenType, any> =
        await axios.get('/refresh', {
          withCredentials: true,
        });

      const {
        data: { roles, accessToken },
      } = userRefreshedInfo;

      if (roles && accessToken) {
        dispatch(contextActionCreator.refreshToken(roles, accessToken));
      }

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