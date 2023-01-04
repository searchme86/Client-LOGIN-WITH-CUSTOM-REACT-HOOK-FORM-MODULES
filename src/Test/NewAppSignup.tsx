import React from 'react';
import {
  FormElm,
  InputElm,
  SelectElm,
  RadioBoxElm,
} from '../components/CustomElements';
import SingleImageUploader from '../components/CustomElements/InputFile/SingleImageUploader';
import TestCustomCheckbox from '../components/CustomElements/CheckBox/TestCustomCheckbox';
import SubmitBtnElm from '../components/CustomElements/UtilElements/SubmitBtnElm';
import ResetBtnElm from '../components/CustomElements/UtilElements/ResetBtnElm';
import PreElm from '../components/CustomElements/UtilElements/PreElm';

import ButtonElm from '../components/CustomElements/Button/ButtonElm';

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
        {/* 추가 */}
        <ButtonElm type="button">버튼</ButtonElm>
        {/* 추가 */}
        <SingleImageUploader name="files" btnTxt="파일을 등록해주세요" />
        <InputElm<FormSchemaType>
          displayName="Email"
          name="email"
          type="text"
        />
        <InputElm<FormSchemaType>
          displayName="Username"
          name="username"
          type="text"
        />
        <SelectElm
          name="pizzaChoice"
          options={['Chicken BBQ', 'Margarita', 'All-dressed']}
        />
        <TestCustomCheckbox
          name="accept"
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
