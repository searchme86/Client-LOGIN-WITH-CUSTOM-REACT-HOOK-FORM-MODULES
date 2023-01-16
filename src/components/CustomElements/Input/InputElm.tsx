import React, { HTMLInputTypeAttribute } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  InputContainer,
  InputWrapper,
  Input,
  InputLabel,
} from '@assets/styles/Input.style';

import TFormErrorMessage from '../UtilElements/FormErrorMessage';

function InputElm<Model extends Record<string, any>>({
  zodValidationKey,
  LabelTxt,
  LabelHide,
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
  LabelHide?: boolean;
}) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputContainer>
        <InputLabel
          htmlFor={inputID}
          display="block"
          fontWeight={labelWeight}
          fontSize={labelSize}
          margin={labelMargin}
          LabelHide={LabelHide}
        >
          {LabelTxt}
        </InputLabel>
        <InputWrapper width={inputWidth}>
          <Input
            type={inputType}
            id={inputID}
            {...register(zodValidationKey.toString())}
            autoComplete={autoComplete}
            placeholder={placeholder}
            padding={inputPadding}
            height={inputHeight}
            disabled={isSubmitting}
          />

          <TFormErrorMessage name={zodValidationKey.toString()} />
        </InputWrapper>
      </InputContainer>
    </>
  );
}

export default InputElm;
