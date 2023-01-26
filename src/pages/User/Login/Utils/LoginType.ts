interface ILoginUser {
  LoginUserNickname: string;
}

export interface IUser extends ILoginUser {
  userProfileImage: string[];
  roles?: number[];
  accessToken?: string;
}

export interface ILoginInfo extends ILoginUser {
  LoginUserPassword: string;
}

export interface IApiResponse {
  message: string;
}
