import { ILoginResponse } from '../pages/User/Login/Utils/LoginType';

interface ApiResponse {
  message: string;
}

interface IUser {
  LoginUserNickname: string;
  userProfileImage: string[];
  roles?: number[];
  accessToken?: string;
}

export type contextStateType = {
  authUser: IUser;
  errorMessage: string;
};

export const contextReducerAction = {
  ADD_ERRORMESSAGE: 'ADD_ERRORMESSAGE' as const,
  SET_USER: 'SET_USER' as const,
  REFRESH_TOKEN: 'REFRESH_TOKEN' as const,
  SET_USER_LOGOUT: 'SET_USER_LOGOUT' as const,
};

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

export type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>
  | ReturnType<typeof contextActionCreator.refreshToken>
  | ReturnType<typeof contextActionCreator.setUserLogout>;
