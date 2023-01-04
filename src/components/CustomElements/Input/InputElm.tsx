import React, { HTMLInputTypeAttribute } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  InputWrapper,
  Input,
  InputLabel,
} from '../../../assets/styles/Input.style';

import TFormErrorMessage from '../UtilElements/FormErrorMessage';

function InputElm<Model extends Record<string, any>>({
  zodValidationKey,
  LabelTxt,
  labelWeight,
  labelSize,
  labelMargin,
  inputType,
  inputID,
  autoComplete,
  inputPadding,
  placeholder,
  inputWidth,
  inputHeight,
}: {
  zodValidationKey: keyof Model;
  LabelTxt: string;
  labelSize?: string;
  labelWeight?: number;
  labelMargin?: string;
  inputType: HTMLInputTypeAttribute;
  inputID: string;
  placeholder: string;
  autoComplete?: string;
  inputWidth?: string;
  inputHeight?: string;
  inputPadding?: string;
}) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel
        htmlFor={inputID}
        fontWeight={labelWeight}
        fontSize={labelSize}
        margin={labelMargin}
      >
        {LabelTxt}
      </InputLabel>
      <InputWrapper width={inputWidth} height={inputHeight}>
        <Input
          type={inputType}
          id={inputID}
          {...register(zodValidationKey.toString())}
          autoComplete={autoComplete}
          placeholder={placeholder}
          padding={inputPadding}
          disabled={isSubmitting}
        />
        <TFormErrorMessage name={zodValidationKey.toString()} />
      </InputWrapper>
    </>
  );
}

export default InputElm;
