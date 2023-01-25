import axios from '@config/axios/axiosCustom';

import { IRegisterFormData } from './RegisterType';

export const RegisterFormApi = async (formData: FormData) => {
  const response = await axios.post<IRegisterFormData>('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data', withCredentials: true },
  });
  return response.data;
};
