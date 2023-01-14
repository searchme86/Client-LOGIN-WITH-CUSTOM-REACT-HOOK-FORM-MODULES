import { ILoginResponse } from '../../src/pages/User/Login/Utils/LoginType';
import { contextAction } from './Action';

export const contextActionCreator = {
  addErrorMessage: (error: string) => ({
    type: contextAction.ADD_ERRORMESSAGE,
    payload: { message: error },
  }),

  setUser: (user: ILoginResponse) => ({
    type: contextAction.SET_USER,
    paylod: {
      LoginUserNickname: user.LoginUserNickname,
      userProfileImage: user.userProfileImage,
      roles: user.roles,
      accessToken: user.accessToken,
    },
  }),

  refreshToken: (roles: number[], accessToken: string) => ({
    type: contextAction.REFRESH_TOKEN,
    payload: {
      roles: roles,
      accessToken: accessToken,
    },
  }),

  setUserLogout: () => ({
    type: contextAction.SET_USER_LOGOUT,
    payload: {
      LoginUserNickname: '',
      userProfileImage: [],
      roles: [],
      accessToken: '',
    },
  }),
};
