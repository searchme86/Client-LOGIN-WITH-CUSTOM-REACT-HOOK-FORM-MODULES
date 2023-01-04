import React from 'react';
import {
  FormElm,
  InputElm,
  SelectElm,
  RadioBoxElm,
} from '../components/CustomElements';
import SingleImageUploader from '../components/CustomElements/InputFile/SingleImageUploader';
import CustomCheckbox from '../components/CustomElements/CheckBox/CustomCheckbox';
import SubmitBtnElm from '../components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '../components/CustomElements/UtilElements/ResetBtnElm';
import PreElm from '../components/CustomElements/UtilElements/PreElm';

import { FormSchema } from '../pages/User/Login/LoginUtils/LoginSchema';
import { FormSchemaType } from '../pages/User/Login/LoginUtils/LoginFormType';
import { Tiers } from '../pages/User/Login/LoginUtils/LoginFormData';
import { someDefaultValues } from '../pages/User/Login/LoginUtils/LoginFormData';
import useLoginFormAction from '../pages/User/Login/hooks/useLoginFormAction';

import './NewAppSinup.css';

function NewAppSignup() {
  const { onSubmit } = useLoginFormAction();

  return (
    <>
      <FormElm<FormSchemaType, typeof FormSchema>
        onSubmit={onSubmit}
        schema={FormSchema}
        defaultValues={someDefaultValues}
      >
        <SingleImageUploader
          zodValidationKey="files"
          btnTxt="파일을 등록해주세요"
        />
        <InputElm<FormSchemaType>
          zodValidationKey="email"
          LabelTxt="Email"
          labelWeight={500}
          inputType="text"
          placeholder="이메일을 등록해주세요"
          inputID="email"
          inputWidth="100%"
          inputHeight="40px"
          inputPadding="10px 10px 10px 10px"
        />
        <InputElm<FormSchemaType>
          zodValidationKey="username"
          LabelTxt="Username"
          labelWeight={500}
          inputWidth="100%"
          inputHeight="40px"
          inputType="text"
          placeholder="유저 닉네임을 입력해주세요"
          inputID="username"
          inputPadding="10px 10px 10px 10px"
        />
        <SelectElm
          name="pizzaChoice"
          options={['Chicken BBQ', 'Margarita', 'All-dressed']}
        />
        <CustomCheckbox<FormSchemaType>
          zodValidationKey="accept"
          text="I accept the Terms of Service"
        />
        <RadioBoxElm tiers={Tiers} />
        <PreElm />
        <SubmitBtnElm />
        <ResetBtnElm values={someDefaultValues} />
      </FormElm>
    </>
  );
}

export default NewAppSignup;
