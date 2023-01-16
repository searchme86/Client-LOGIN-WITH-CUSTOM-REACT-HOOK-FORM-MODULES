import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { LoginUserApi, LogoutUserApi } from '../Utils/LoginApi';

import { useStateContext } from '@context/index';
import { contextActionCreator } from '@context/contextConfig/contextActionCreator';

import { ILoginInfo } from '../Utils/LoginType';

function LoginQuery() {
  const stateContext = useStateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = ((location.state as any)?.from.pathname as string) || '/';

  const LoginQuery = useMutation(
    (userData: ILoginInfo) => LoginUserApi(userData),
    {
      onSuccess: (data) => {
        stateContext.dispatch(contextActionCreator.setUser(data));
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
