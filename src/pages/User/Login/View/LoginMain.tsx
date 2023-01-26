import React from 'react';

import LoginForm from '../form/loginForm';
import LoginBottom from './loginBottom';
import LoginHeader from './loginHeader';

import { LonginContainer } from './login.style';

function LoginMain() {
  return (
    <LonginContainer>
      <LoginHeader />
      <LoginForm />
      <LoginBottom />
    </LonginContainer>
  );
}

export default LoginMain;
