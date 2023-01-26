import axios from '@config/axios/axiosCustom';
import { ILoginInfo, IUser } from './loginType';

export const LoginUserApi = async (LoginInput: ILoginInfo) => {
  const response = await axios.post<IUser>(
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
