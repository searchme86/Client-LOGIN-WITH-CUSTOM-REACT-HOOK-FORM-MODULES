import axios from '../../../../server/axios/axiosCustom';
import { ILoginInfo, ILoginResponse } from './LoginType';

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
