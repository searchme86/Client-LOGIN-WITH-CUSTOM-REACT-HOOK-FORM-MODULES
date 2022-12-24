import React from 'react';
import {
  LoginAlertArea,
  LoginToSignUp,
  LoginToSignUpMsg,
} from '../Login.style';

function LoginAlert() {
  return (
    <LoginAlertArea>
      <LoginToSignUp to="/register">
        <LoginToSignUpMsg>아직 계정이 없나요? SignUp</LoginToSignUpMsg>
      </LoginToSignUp>
    </LoginAlertArea>
  );
}

export default LoginAlert;
