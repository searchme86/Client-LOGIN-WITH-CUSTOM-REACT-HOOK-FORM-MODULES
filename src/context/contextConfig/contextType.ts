import { contextActionCreator } from '@context/contextConfig/contextActionCreator';
import { IUser } from '@pages/user/login/utils/loginType';

export type contextStateType = {
  authUser: IUser;
  errorMessage: string;
};

export type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>
  | ReturnType<typeof contextActionCreator.refreshToken>
  | ReturnType<typeof contextActionCreator.setUserLogout>;
