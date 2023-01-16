import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import {
  RegisterFormSchema,
  RegisterSchemaType,
} from '../Utils/RegisterSchema';
import { UlList, UlLi, DisplayContainer } from '@assets/styles/Display.style';
import FormElm from '@components/CustomElements/Form/FormElm';
import InputElm from '@components/CustomElements/Input/InputElm';
import SingleImageUploader from '@components/CustomElements/InputFile/SingleImageUploader';
import SubmitBtnElm from '@components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '@components/CustomElements/UtilElements/ResetBtnElm';
import List from '@components/Design/List/List';

import { RegisterFormDefaultData } from '../Utils/RegisterData';
import useImageCompression from '@hooks/useImageCompression';

import RegisterQuery from '../Query/RegisterQuery';

function RegisterForm() {
  const { CompressImage } = useImageCompression();
  const {
    RegisterQuery: { mutate: createUser },
  } = RegisterQuery();

  const createFormData = async (
    base64: string,
    fileNameUploaded: string,
    data: any
  ) => {
    const { userNickName, userEmail, userPassword } = data;

    const byteString = window.atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const pngblob = new Blob([ia], {
      type: 'image/png',
    });
    const imagePng = new File([pngblob], fileNameUploaded, {
      type: 'image/png',
    });

    const userFormData = new FormData();
    userFormData.append('userProfile', imagePng);
    userFormData.append('userNickName', userNickName);
    userFormData.append('userEmail', userEmail);
    userFormData.append('userPassword', userPassword);

    createUser(userFormData);
  };

  const onRegisterSubmit: SubmitHandler<RegisterSchemaType> = async (
    registerFormdata
  ) => {
    try {
      let userRawFile = registerFormdata.userImage[0];
      let fileNameUploaded = registerFormdata.userImage[0]?.name;
      let fileCompressed = await CompressImage(userRawFile);

      if (fileCompressed) {
        const reader = new FileReader();
        reader.readAsDataURL(fileCompressed);

        reader.onload = () => {
          createFormData(
            reader.result as string,
            fileNameUploaded,
            registerFormdata
          );
        };

        reader.onerror = () => {
          reader.abort();
          new Error(
            `File 읽기에서 에러가 발생했습니다.: ${reader?.error?.message}`
          );
        };
      }

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 3000);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

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
            autoComplete="username"
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
              padding="10px 0 10px 0"
            />
            <ResetBtnElm
              width="40%"
              btnTxt="초기화"
              bgColor="#FB6542"
              fontColor="#fff"
              padding="10px 0 10px 0"
              values={RegisterFormDefaultData}
            />
          </DisplayContainer>
        </UlLi>
      </UlList>
    </FormElm>
  );
}

export default RegisterForm;
