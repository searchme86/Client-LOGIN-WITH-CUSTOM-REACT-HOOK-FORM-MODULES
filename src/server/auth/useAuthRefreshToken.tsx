import axios from '@server/axios/axiosCustom';
import { AxiosResponse, AxiosError } from 'axios';
import { useStateContext } from '@context/index';
import { contextActionCreator } from '@context/contextConfig/contextActionCreator';
import { IUser } from '@pages/User/Login/Utils/LoginType';

function useRefreshToken() {
  const { dispatch } = useStateContext();

  const refresh = async () => {
    try {
      const userRefreshedInfo: AxiosResponse<IUser, any> = await axios.get(
        '/refresh',
        {
          withCredentials: true,
        }
      );

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
