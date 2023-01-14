import { contextActionCreator } from './contextActionCreator';
import { IUser } from '../../pages/User/Login/Utils/LoginType';

export type contextStateType = {
  authUser: IUser;
  errorMessage: string;
};

export type contextActionType =
  | ReturnType<typeof contextActionCreator.addErrorMessage>
  | ReturnType<typeof contextActionCreator.setUser>
  | ReturnType<typeof contextActionCreator.refreshToken>
  | ReturnType<typeof contextActionCreator.setUserLogout>;
