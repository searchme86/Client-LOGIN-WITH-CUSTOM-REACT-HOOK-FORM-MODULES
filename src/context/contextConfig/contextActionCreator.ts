import { contextReducerAction } from '@context/contextConfig/contextAction';
import { ILoginResponse } from '@pages/User/Login/Utils/LoginType';
import { ApiResponse } from '@pages/User/Login/Utils/LoginType';

export const contextActionCreator = {
  addErrorMessage: (error: ApiResponse) => ({
    type: contextReducerAction.ADD_ERRORMESSAGE,
    payload: { message: error.message },
  }),

  setUser: (user: ILoginResponse) => ({
    type: contextReducerAction.SET_USER,
    paylod: {
      LoginUserNickname: user.LoginUserNickname,
      userProfileImage: user.userProfileImage,
      roles: user.roles,
      accessToken: user.accessToken,
    },
  }),

  refreshToken: (roles: number[], accessToken: string) => ({
    type: contextReducerAction.REFRESH_TOKEN,
    payload: {
      roles: roles,
      accessToken: accessToken,
    },
  }),

  setUserLogout: () => ({
    type: contextReducerAction.SET_USER_LOGOUT,
    payload: {
      LoginUserNickname: '',
      userProfileImage: [],
      roles: [],
      accessToken: '',
    },
  }),
};
