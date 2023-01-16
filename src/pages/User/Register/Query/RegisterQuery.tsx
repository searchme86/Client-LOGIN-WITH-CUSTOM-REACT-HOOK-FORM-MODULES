import React from 'react';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { RegisterFormApi } from '../Utils/RegisterApi';

function RegisterQuery() {
  const RegisterQuery = useMutation(
    (userInfo: FormData) => RegisterFormApi(userInfo),
    {
      onSuccess: () => {
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

  return { RegisterQuery };
}

export default RegisterQuery;
