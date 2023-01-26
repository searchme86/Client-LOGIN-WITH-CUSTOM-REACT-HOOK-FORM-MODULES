import axios from '@config/axios/axiosCustom';
import { AxiosResponse, AxiosError } from 'axios';
import { useStateContext } from '@context/index';
import { contextActionCreator } from '@context/contextConfig/contextActionCreator';
import { IUser } from '@pages/user/login/utils/loginType';

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
        console.error(
          '리프레쉬 토큰을 획득하는 중 에러가 발생했습니다.',
          error.response
        );
        console.log(
          '리프레쉬 토큰을 획득하는 중 에러가 발생했습니다.',
          error.response
        );
      }
    }
  };
  return refresh;
}

export default useRefreshToken;
