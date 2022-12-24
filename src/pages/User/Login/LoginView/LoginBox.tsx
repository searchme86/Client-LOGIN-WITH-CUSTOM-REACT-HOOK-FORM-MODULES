import React, { useState } from 'react';

import { LonginContainer } from '../Login.style';

import { OffScreenSpan } from '../../../../assets/styles/Common.style';
import LoginHeader from './LoginHeader';
import LoginAlert from './LoginAlert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './input.css';

function LoginBox() {
  const [showPassword, setShowPassword] = useState(true);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
    console.log('clicked');
    console.log('showPassword', showPassword);
  };

  return (
    <LonginContainer>
      <LoginHeader />
      <div className="container">
        <form action="">
          <div className="input-holder">
            <label htmlFor="userEmail">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type="text"
              id="userEmail"
              className="input"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <p className="errorMessage">
            유저 닉네임의 에러메세지 텍스트 입니다.
          </p>
          <div className="input-holder">
            <label htmlFor="userPassword">
              <OffScreenSpan>유저 이메일</OffScreenSpan>
            </label>
            <input
              type={showPassword ? 'password' : 'text'}
              id="userPassword"
              placeholder="비밀번호를 입력해주세요"
              className="input"
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
