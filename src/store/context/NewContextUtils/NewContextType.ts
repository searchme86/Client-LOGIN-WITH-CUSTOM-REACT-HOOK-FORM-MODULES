import {
  ILoginResponse,
  ApiResponse,
} from '../../../pages/User/UserRequestType';

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
};

export type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>;
