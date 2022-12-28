import React from 'react';
import {
  FormElm,
  InputElm,
  CheckBoxElm,
  CheckBoxElmMessage,
  SelectElm,
  RadioBoxElm,
} from '../components/CustomElements/Form';
import { ResetBtnElm, SubmitBtnElm } from '../components/CustomElements/Button';

import PreElm from '../components/CustomElements/display/PreElm';

import { FormSchema } from '../pages/User/Login/LoginUtils/LoginSchema';
import {
  FormSchemaType,
  ResetType,
} from '../pages/User/Login/LoginUtils/LoginFormType';
import { Tiers } from '../pages/User/Login/LoginUtils/LoginFormData';

import { someDefaultValues } from '../pages/User/Login/LoginUtils/LoginFormData';
import useLoginFormAction from '../pages/User/Login/hooks/useLoginFormAction';

import './NewAppSinup.css';

import CutomButton from '../components/CustomElements/Button/CutomButton';
import Text from '../components/CustomElements/Text/Text';
import TestApp from './TestApp';
import AnimatedCheckbox from './AnimatedCheckbox';
import TestCustomCheckbox from '../components/CustomElements/Form/TestCustomCheckbox';

function NewAppSignup() {
  const { onSubmit } = useLoginFormAction();

  return (
    <>
      <Text typography="h1" element="p">
        ddd
      </Text>

      <FormElm<FormSchemaType, typeof FormSchema>
        onSubmit={onSubmit}
        schema={FormSchema}
        defaultValues={someDefaultValues}
      >
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
        {/* <CheckBoxElm name="accept" text="I accept the Terms of Service" /> */}

        <TestCustomCheckbox
          name="accept"
          text="I accept the Terms of Service"
        />
        {/* <CheckBoxElmMessage /> */}
        <RadioBoxElm tiers={Tiers} />
        <PreElm />
        <SubmitBtnElm />
        <ResetBtnElm values={someDefaultValues} />
      </FormElm>

      <TestApp />
      {/* <AnimatedCheckbox /> */}
    </>
  );
}

export default NewAppSignup;
