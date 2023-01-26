import React from 'react';

import {
  RegisterHeader,
  RegisterIntro,
  RegisterTitle,
  LoginSection,
  LoginTitle,
  LinkLogin,
  SiteBrandTitle,
} from './register.style';

function RegisterHead() {
  return (
    <RegisterHeader>
      <RegisterIntro>
        Welcome to
        <SiteBrandTitle to={'/'}>Agora</SiteBrandTitle>
      </RegisterIntro>
      <RegisterTitle>회원 등록하기</RegisterTitle>
      <LoginSection>
        <LinkLogin to={'/login'}>
          <LoginTitle>
            이미 계정이 있으신가요?
            <br /> 로그인
          </LoginTitle>
        </LinkLogin>
      </LoginSection>
    </RegisterHeader>
  );
}

export default RegisterHead;
