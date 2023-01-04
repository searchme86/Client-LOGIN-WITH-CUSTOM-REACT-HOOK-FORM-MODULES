import React from 'react';
import './RegisterFormTest.css';
import RegisterAlertMessage from '../message/RegisterAlertMessage';

import {
  RegisterFormSchema,
  RegisterSchemaType,
} from '../RegisterUtils/RegisterSchema';

import {
  UlList,
  UlLi,
  DisplayContainer,
  DisplayItem,
} from '../../../../assets/styles/Display.style';

import FormElm from '../../../../components/CustomElements/Form/FormElm';
import InputElm from '../../../../components/CustomElements/Input/InputElm';
import SingleImageUploader from '../../../../components/CustomElements/InputFile/SingleImageUploader';
import CustomCheckbox from '../../../../components/CustomElements/CheckBox/CustomCheckbox';
import SubmitBtnElm from '../../../../components/CustomElements/UtilElements/SubmitBtnElm';

import useRegisterFormAction from '../hooks/useRegisterFormAction';
import PreElm from '../../../../components/CustomElements/UtilElements/PreElm';

function RegisterForm() {
  const { onRegisterSubmit } = useRegisterFormAction();

  return (
    <FormElm<RegisterSchemaType, typeof RegisterFormSchema>
      onSubmit={onRegisterSubmit}
      schema={RegisterFormSchema}
    >
      <UlList>
        <UlLi margin="0 0 6px 0">
          <SingleImageUploader<RegisterSchemaType>
            zodValidationKey="userImage"
            btnTxt="파일 등록"
          />
        </UlLi>
        <UlLi margin="0 0 6px 0">
          <InputElm<RegisterSchemaType>
            zodValidationKey="userNickName"
            LabelTxt="닉네임"
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="text"
            placeholder="닉네임을 등록해주세요"
            inputID="userNickname"
            inputPadding="0 10px 0 10px"
          />
        </UlLi>
        <UlLi margin="0 0 6px 0">
          <InputElm<RegisterSchemaType>
            zodValidationKey="userEmail"
            LabelTxt="이메일"
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="text"
            placeholder="이메일을 등록해주세요"
            inputID="userEmail"
            inputPadding="0 10px 0 10px"
          />
        </UlLi>
        <UlLi margin="0 0 6px 0">
          <InputElm<RegisterSchemaType>
            zodValidationKey="userPassword"
            LabelTxt="비밀번호"
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="password"
            placeholder="비밀번호를 작성해주세요"
            autoComplete="new-password"
            inputID="userPassword"
            inputPadding="0 10px 0 10px"
          />
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
        </UlLi>
        <UlLi margin="0 0 15px 0">
          <InputElm<RegisterSchemaType>
            zodValidationKey="userConfirmPassword"
            LabelTxt="비밀번호 확인"
            labelWeight={500}
            labelSize="16px"
            labelMargin="0 0 5px 0"
            inputWidth="100%"
            inputHeight="40px"
            inputType="password"
            placeholder="작성한 비밀번호를 다시 입력해주세요"
            autoComplete="new-password"
            inputID="confirmPassword"
            inputPadding="0 10px 0 10px"
          />
        </UlLi>
        <UlLi margin="0 0 6px 0">
          <CustomCheckbox<RegisterSchemaType>
            zodValidationKey="userAgreement"
            text="I accept the Terms of Service"
          />
        </UlLi>
        <UlLi>
          <div className="button-container">
            <SubmitBtnElm />
            <button className="button-submit">등록</button>
          </div>
        </UlLi>
      </UlList>

      {/* <PreElm /> */}
    </FormElm>
  );
}

export default RegisterForm;
