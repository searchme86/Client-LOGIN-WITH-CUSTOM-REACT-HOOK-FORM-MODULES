import { AxiosError } from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

import { RegisterFormApi, LoginUserApi } from './UserRequestApi';
import { ILoginInfo } from './UserRequestType';

import { useStateContext } from '../../store/context/NewContext';
import { contextActionCreator } from '../../store/context/NewContextUtils/NewContextType';

function UserRequestQuery() {
  const stateContext = useStateContext();

  const RegisterQuery = useMutation(
    (userInfo: FormData) => RegisterFormApi(userInfo),
    {
      onSuccess: () => {
        console.log('리액트 쿼리가 성공했습니다.');
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
        if (stateContext) {
          stateContext.dispatch(contextActionCreator.setUser(data));
          console.log('hello!', stateContext?.contextValue.authUser);
        }
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

  return { RegisterQuery, LoginQuery };
}

export default UserRequestQuery;
