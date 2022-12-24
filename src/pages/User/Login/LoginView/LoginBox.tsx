import React, { useState } from 'react';

import { LonginContainer } from '../Login.style';

import { OffScreenSpan } from '../../../../assets/styles/Common.style';
import LoginHeader from './LoginHeader';
import LoginAlert from './LoginAlert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import useDebounceFn from '../../../../hooks/useDebounce';
import './input.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = z.object({
  userNickname: z.string().min(1, { message: '닉네임이 입력되지 않았습니다.' }),
  userPassword: z
    .string()
    .min(1, { message: '패스워드가 입력되지 않았습니다.' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

function LoginBox() {
  type InitialStateType = {
    [key: string]: string;
  };

  const [showPassword, setShowPassword] = useState(true);
  const [testValue, setTestValue] = useState<InitialStateType>({
    userNickname: '',
    userPassword: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  console.log('errors:', errors);

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log('data', data);
  };

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setTestValue({ ...testValue, [name]: value });
  };

  const inputDebouncedHandler = useDebounceFn(inputChangeHandler);

  return (
    <LonginContainer>
      <LoginHeader />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-holder">
            <label htmlFor="userNickname">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type="text"
              id="userNickname"
              className="input"
              placeholder="닉네임을 입력해주세요"
              {...register('userNickname', {
                onChange: inputDebouncedHandler,
              })}
            />
          </div>
          {errors.userNickname ? (
            <p className="errorMessage">{errors.userNickname.message}</p>
          ) : null}

          <div className="input-holder">
            <label htmlFor="userPassword">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type={showPassword ? 'password' : 'text'}
              id="userPassword"
              placeholder="비밀번호를 입력해주세요"
              className="input"
              {...register('userPassword', {
                onChange: inputDebouncedHandler,
              })}
            />
            <button type="button" className="button" onClick={handleToggle}>
              {showPassword ? (
                <>
                  <OffScreenSpan>비밀번호 보이기</OffScreenSpan>
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ fontSize: '20px', color: '#303C6C' }}
                  />
                </>
              ) : (
                <>
                  <OffScreenSpan>비밀번호 감추기</OffScreenSpan>
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    style={{ fontSize: '20px', color: '#303C6C' }}
                  />
                </>
              )}
            </button>
          </div>
          <button type="submit">sign in</button>
          <p className="errorMessage">
            유저 이메일의 에러메세지 텍스트 입니다.
          </p>
        </form>
      </div>
      <LoginAlert />
    </LonginContainer>
  );
}

export default LoginBox;
