export interface IRegisterFormData {
  userImage: File;
  userNickName: string;
  userEmail: string;
  userPassword: string;
  userConfirmPassword: string;
}

export interface ApiResponse {
  message: string;
}

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
