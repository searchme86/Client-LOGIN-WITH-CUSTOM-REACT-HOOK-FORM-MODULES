import { contextReducerAction } from '@context/contextConfig/contextAction';
import { IUser } from '@pages/user/login/utils/loginType';
import { IApiResponse } from '@pages/user/login/utils/loginType';

export const contextActionCreator = {
  addErrorMessage: (error: IApiResponse) => ({
    type: contextReducerAction.ADD_ERRORMESSAGE,
    payload: { message: error.message },
  }),

  setUser: (user: IUser) => ({
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
