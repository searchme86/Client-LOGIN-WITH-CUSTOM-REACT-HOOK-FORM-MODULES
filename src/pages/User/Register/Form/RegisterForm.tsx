import React from 'react';

import './RegisterFormTest.css';
import RegisterAlertMessage from '../message/RegisterAlertMessage';

function RegisterForm() {
  return (
    <>
      <div className="formContainer">
        <form>
          <fieldset>
            <ul className="form-list">
              <li>
                <div className="display-container">
                  <div className="display-item">
                    <label htmlFor="userImage">유저이미지</label>
                    <div className="inputBox">
                      <input
                        type="text"
                        id="userName"
                        autoComplete="username"
                        placeholder="닉네임을 작성해주세요"
                      />
                    </div>
                    <p className="errorMsg">
                      닉네임은 최소 3자 이상으로 문자로 시작해야 합니다.
                    </p>
                  </div>
                  <div className="display-item">
                    <div className="">
                      <label htmlFor="userName">닉네임</label>
                      <div className="inputBox">
                        <input
                          type="text"
                          id="userName"
                          autoComplete="username"
                          placeholder="닉네임을 작성해주세요"
                        />
                      </div>
                      <p className="errorMsg">
                        닉네임은 최소 3자 이상으로 문자로 시작해야 합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <label htmlFor="userEmail">이메일</label>
                <div className="inputBox">
                  <input
                    type="email"
                    id="userEmail"
                    autoComplete="username"
                    placeholder="이메일을 작성해주세요"
                  />
                </div>
                <p className="errorMsg">이메일 양식으로 작성해주세요</p>
              </li>
              <li>
                <label htmlFor="userPassword">비밀번호</label>
                <div className="inputBox">
                  <input
                    type="password"
                    id="userPassword"
                    autoComplete="new-password"
                    placeholder="비밀번호를 작성해주세요"
                  />
                </div>
                <p className="errorMsg">올바른 비밀번호 양식을 지켜주세요</p>
                <div className="info">
                  <strong className="info-title">비밀번호 작성규칙</strong>
                  <ul className="info-list">
                    <li>
                      <p>* 대문자 혹은 소문자로 시작해주세요</p>
                    </li>
                    <li>
                      <p>* 최소 8자 부터 24자 이내로 작성해주세요</p>
                    </li>
                    <li>
                      <p>* 특수문자를 포함해주세요</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <div className="inputBox">
                  <input
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    placeholder="작성한 비밀번호를 다시 입력해주세요"
                  />
                </div>
                <p className="errorMsg">작성한 비밀번호와 일치하지 않습니다.</p>
              </li>
              <li>
                <div className="agreementBox">
                  <input type="checkbox" id="agreement" />
                  <label htmlFor="agreement">
                    <span className="label-title">동의하시나요?</span>
                  </label>
                </div>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <div className="button-container">
              <button className="button-reset">초기화</button>
              <button className="button-submit">등록</button>
            </div>
          </fieldset>
        </form>
      </div>
      <RegisterAlertMessage />
    </>
  );
}

export default RegisterForm;
