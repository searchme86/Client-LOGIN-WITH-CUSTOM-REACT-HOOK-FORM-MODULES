import React from 'react';
import LoginForm from '../Form/LoginForm';

import { LonginContainer } from './Login.style';
import LoginBottom from './LoginBottom';
import LoginHeader from './LoginHeader';

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
