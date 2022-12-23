import React from 'react';

import {
  LoginWrapper,
  LonginContainer,
  LoginBox,
  LoginHeader,
  LoginImage,
  LoginToHome,
  LoginTitle,
  LoginContent,
  LoginBtnArea,
  LoginAlertArea,
  LoginToSignUp,
  LoginToSignUpMsg,
  LoginBgShapehape,
} from './Login.style';

import BgAnimation from '../../../components/BgAnimation/BgAnimation';

import { OffScreenSpan } from '../../../assets/styles/Common.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <LoginWrapper
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{
        x: window.innerWidth,
        transition: { ease: 'easeIn', duration: 1 },
      }}
    >
      <LonginContainer>
        <LoginBox>
          <LoginHeader>
            <LoginImage>
              <LoginToHome to={'/'}>
                <OffScreenSpan>홈으로 이동</OffScreenSpan>
                <FontAwesomeIcon
                  icon={faHouseChimneyWindow}
                  style={{ fontSize: '30px', color: '#303C6C' }}
                />
              </LoginToHome>
            </LoginImage>
            <LoginTitle>LogIn</LoginTitle>
          </LoginHeader>
          <LoginContent></LoginContent>
          <LoginAlertArea>
            <LoginToSignUp to="/register">
              <LoginToSignUpMsg>아직 계정이 없나요? SignUp</LoginToSignUpMsg>
            </LoginToSignUp>
          </LoginAlertArea>
        </LoginBox>
        <LoginBgShapehape />
        <BgAnimation />
      </LonginContainer>
    </LoginWrapper>
  );
}

export default Login;
