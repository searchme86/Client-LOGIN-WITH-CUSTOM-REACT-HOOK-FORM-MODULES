export interface ILoginInfo {
  LoginUserNickname: string;
  LoginUserPassword: string;
}

export interface ILoginResponse {
  LoginUserNickname: string;
  userProfileImage: string[];
  roles?: number[];
  accessToken?: string;
}
