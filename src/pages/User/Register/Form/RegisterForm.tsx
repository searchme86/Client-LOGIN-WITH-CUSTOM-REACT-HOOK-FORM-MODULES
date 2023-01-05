import React from 'react';
import {
  RegisterFormSchema,
  RegisterSchemaType,
} from '../RegisterUtils/RegisterSchema';
import {
  UlList,
  UlLi,
  DisplayContainer,
} from '../../../../assets/styles/Display.style';
import FormElm from '../../../../components/CustomElements/Form/FormElm';
import InputElm from '../../../../components/CustomElements/Input/InputElm';
import SingleImageUploader from '../../../../components/CustomElements/InputFile/SingleImageUploader';
import SubmitBtnElm from '../../../../components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '../../../../components/CustomElements/UtilElements/ResetBtnElm';

import List from '../../../../components/Design/List/List';
import useRegisterFormAction from '../RegisterUtils/useRegisterFormAction';
import { RegisterFormDefaultData } from '../RegisterUtils/RegisterData';

function RegisterForm() {
  const { onRegisterSubmit } = useRegisterFormAction();

  return (
    <FormElm<RegisterSchemaType, typeof RegisterFormSchema>
      onSubmit={onRegisterSubmit}
      schema={RegisterFormSchema}
    >
      <UlList>
        {/* 프로필 이미지 */}
        <UlLi margin="0 0 14px 0">
          <SingleImageUploader<RegisterSchemaType>
            zodValidationKey="userImage"
            btnTxt="파일 등록"
          />
        </UlLi>
        {/* 유저 닉네임 */}
        <UlLi margin="0 0 14px 0">
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
        {/* 유저 이메일  */}
        <UlLi margin="0 0 14px 0">
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
        {/* 유저 비밀번호 */}
        <UlLi margin="0 0 14px 0">
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
          {/* 비밀번호 작성규칙 */}
          <List />
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
        <UlLi>
          <DisplayContainer
            display="flex"
            justifyContent="space-evenly"
            padding="20px 0 0 0"
          >
            <SubmitBtnElm
              btnTxt="등록"
              fontColor="#fff"
              bgColor="#375E97"
              width="40%"
            />
            <ResetBtnElm
              width="40%"
              btnTxt="초기화"
              bgColor="#FB6542"
              fontColor="#fff"
              values={RegisterFormDefaultData}
            />
          </DisplayContainer>
        </UlLi>
      </UlList>
    </FormElm>
  );
}

export default RegisterForm;
