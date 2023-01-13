import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import {
  RegisterFormApi,
  LoginUserApi,
  LogoutUserApi,
} from '../UserRequestApi';
import { ILoginInfo } from '../UserRequestType';

import { useStateContext } from '../../../../context/NewContext';
import { contextActionCreator } from '../../../../context/NewContextType';

import { useLocation, useNavigate } from 'react-router-dom';

function UserRequestQuery() {
  const stateContext = useStateContext();
  const navigate = useNavigate();

  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || '/';

  const RegisterQuery = useMutation(
    (userInfo: FormData) => RegisterFormApi(userInfo),
    {
      onSuccess: () => {
        console.log('리액트 쿼리가 성공했습니다.');
        window.location.href = '/login';
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log('리액트 쿼리가 실패했습니다', error);
        } else if (error instanceof Error) {
          console.log('리액트 쿼리가 실패했습니다.', error.message);
        }
      },
    }
  );

  const LoginQuery = useMutation(
    (userData: ILoginInfo) => LoginUserApi(userData),
    {
      onSuccess: (data) => {
        console.log('리액트 쿼리가 완료했습니다.');
        console.log('로그인후무엇이왔을까요', data);
        stateContext.dispatch(contextActionCreator.setUser(data));
        console.log('hello!', stateContext?.contextValue.authUser);
        navigate(from, { replace: true });
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log('리액트 쿼리가 실패했습니다', error);
        } else if (error instanceof Error) {
          console.log('리액트 쿼리가 실패했습니다.', error.message);
        }
      },
    }
  );

  const LogoutQuery = useMutation(() => LogoutUserApi(), {
    onSuccess: () => {
      stateContext.dispatch(contextActionCreator.setUserLogout());
      window.location.href = '/login';
    },
    onError: () => {},
  });

  return { RegisterQuery, LoginQuery, LogoutQuery };
}

export default UserRequestQuery;
