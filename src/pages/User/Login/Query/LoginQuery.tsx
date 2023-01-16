import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { ILoginInfo } from '../Utils/LoginType';
import { LoginUserApi, LogoutUserApi } from '../Utils/LoginApi';

import { useStateContext } from '../../../../context';
import { contextActionCreator } from '../../../../context/contextConfig/contextActionCreator';

function LoginQuery() {
  const stateContext = useStateContext();
  const navigate = useNavigate();

  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || '/';

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

  return { LoginQuery, LogoutQuery };
}

export default LoginQuery;
