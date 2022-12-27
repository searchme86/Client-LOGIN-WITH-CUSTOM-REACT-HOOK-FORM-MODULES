import React, { forwardRef } from 'react';
import { CustomInputProps } from './TuseCustomElmType';
import FormErrorMessage from './TFormErrorMessage';

export const InputElm = forwardRef<HTMLInputElement, CustomInputProps>(
  function InputElm({ label, type = 'text', ...HTMLAttributesProps }, ref) {
    return (
      <div className="">
        <label>{label}</label>
        <div className="">
          <input type={type} ref={ref} {...HTMLAttributesProps} />
        </div>
        <FormErrorMessage name={HTMLAttributesProps.name} />
      </div>
    );
  }
);
