import React from 'react';

import { LonginContainer } from '../Login.style';

import { OffScreenSpan } from '../../../../assets/styles/Common.style';
import LoginHeader from './LoginHeader';
import LoginAlert from './LoginAlert';
import './input.css';

function LoginBox() {
  return (
    <LonginContainer>
      <LoginHeader />
      <div className="container">
        <form action="">
          <div className="input-holder">
            <label htmlFor="userNickname">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type="text"
              id="userNickname"
              className="input"
              placeholder="닉네임을 입력해주세요"
            />
          </div>
          <p className="errorMessage">
            유저 닉네임의 에러메세지 텍스트 입니다.
          </p>
          <div className="input-holder">
            <label htmlFor="userEmail">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type="text"
              id="userEmail"
              placeholder="이메일을 입력해주세요"
              className="input"
            />
          </div>
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
