import React from 'react';

import FormElm from '../../../../components/CustomElements/Form/FormElm';
import InputElm from '../../../../components/CustomElements/Input/InputElm';
import SubmitBtnElm from '../../../../components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '../../../../components/CustomElements/UtilElements/ResetBtnElm';

import { LoginSchemaType } from '../LoginUtils/NewLoginSchema';
import { LoginFormSchema } from '../LoginUtils/NewLoginSchema';

import useNewLoginFormAction from '../hooks/useNewLoginFormAction';

import { LonginContainer } from '../Login.style';
import LoginHeader from '../LoginView/LoginHeader';
import LoginAlert from '../LoginView/LoginAlertSection';

function LoginForm() {
  const { onLoginSubmit } = useNewLoginFormAction();

  return (
    <LonginContainer>
      <LoginHeader />
      <div className="" style={{ margin: 'margin: 10px 0 10px 0' }}>
        <FormElm<LoginSchemaType, typeof LoginFormSchema>
          onSubmit={onLoginSubmit}
          schema={LoginFormSchema}
        >
          <ul>
            <li>
              <InputElm<LoginSchemaType>
                zodValidationKey="LoginUserNickname"
                LabelTxt="닉네임"
                LabelHide={true}
                labelWeight={500}
                labelSize="16px"
                labelMargin="0 0 5px 0"
                inputWidth="100%"
                inputHeight="40px"
                inputType="text"
                placeholder="닉네임을 입력해주세요"
                inputID="LoginUserNickname"
                inputPadding="0 10px 0 10px"
              />
            </li>
            <li>
              <InputElm<LoginSchemaType>
                zodValidationKey="LoginUserPassword"
                LabelTxt="닉네임"
                LabelHide={true}
                labelWeight={500}
                labelSize="16px"
                labelMargin="0 0 5px 0"
                inputWidth="100%"
                inputHeight="40px"
                inputType="password"
                placeholder="비밀번호를 입력해주세요"
                inputID="LoginUserNickname"
                inputPadding="0 10px 0 10px"
              />
            </li>
            <li>
              <div className=""></div>
            </li>
          </ul>
        </FormElm>
      </div>
      <LoginAlert />
    </LonginContainer>
  );
}

export default LoginForm;
