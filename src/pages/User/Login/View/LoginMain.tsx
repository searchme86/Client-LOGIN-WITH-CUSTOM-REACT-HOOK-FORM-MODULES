import React from 'react';

import LoginForm from '../Form/LoginForm';
import LoginBottom from './LoginBottom';
import LoginHeader from './LoginHeader';

import { LonginContainer } from './Login.style';

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
