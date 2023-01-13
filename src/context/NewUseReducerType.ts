import { ILoginResponse } from '../pages/User/UserConfig/UserRequestType';

const contextAction = {
  ADD_ERRORMESSAGE: 'addErrorMessage' as const,
  SET_USER: 'setUser' as const,
  REFRESH_TOKEN: 'refreshToken' as const,
  SET_USER_LOGOUT: 'SET_USER_LOGOUT' as const,
};

const contextActionCreator = {
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

export type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>
  | ReturnType<typeof contextActionCreator.refreshToken>
  | ReturnType<typeof contextActionCreator.setUserLogout>;
