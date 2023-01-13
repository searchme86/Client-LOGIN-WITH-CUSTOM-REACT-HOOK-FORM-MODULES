import axios from '../../../server/axios/axiosCustom';

import {
  IRegisterFormData,
  ILoginInfo,
  ILoginResponse,
} from './UserRequestType';

export const RegisterFormApi = async (formData: FormData) => {
  const response = await axios.post<IRegisterFormData>('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data', withCredentials: true },
  });
  return response.data;
};

export const LoginUserApi = async (LoginInput: ILoginInfo) => {
  const response = await axios.post<ILoginResponse>(
    '/auth/create',
    JSON.stringify(LoginInput),
    { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
  );
  return response.data;
};

export const LogoutUserApi = async () => {
  const response = await axios.post('/logout', { withCredentials: true });
  return response.data;
};
