import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  InputContainer,
  InputWrapper,
  Input,
  InputLabel,
} from '../../../assets/styles/Input.style';

import TFormErrorMessage from '../UtilElements/FormErrorMessage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { OffScreenSpan } from '../../../assets/styles/common/Common.style';
type OnlyPasswordType = 'password';

function InputPassword<Model extends Record<string, any>>({
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
  inputType: OnlyPasswordType;
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

  const [showPassword, setShowPassword] = useState(true);
  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <InputContainer>
        <InputLabel
          htmlFor={inputID}
          display="block"
          fontWeight={labelWeight}
          fontSize={labelSize}
          margin={labelMargin}
        >
          {LabelTxt}
        </InputLabel>
        <InputWrapper width={inputWidth}>
          <Input
            type={showPassword ? inputType : 'text'}
            id={inputID}
            {...register(zodValidationKey.toString())}
            autoComplete={autoComplete}
            placeholder={placeholder}
            padding={inputPadding}
            height={inputHeight}
            disabled={isSubmitting}
          />
          <button type="button" className="button" onClick={handleToggle}>
            {showPassword ? (
              <>
                <OffScreenSpan>비밀번호 보이기</OffScreenSpan>
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: '20px', color: '#303C6C' }}
                />
              </>
            ) : (
              <>
                <OffScreenSpan>비밀번호 감추기</OffScreenSpan>
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  style={{ fontSize: '20px', color: '#303C6C' }}
                />
              </>
            )}
          </button>

          <TFormErrorMessage name={zodValidationKey.toString()} />
        </InputWrapper>
      </InputContainer>
    </>
  );
}

export default InputPassword;
