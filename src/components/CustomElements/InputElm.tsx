import React, { forwardRef } from 'react';
import { CustomInputProps } from '../../hooks/useCustomElmType';
import FormErrorMessage from '../../utils/FormErrorMessage';

export const InputElm = forwardRef<HTMLInputElement, CustomInputProps>(
  function InputElm({ label, type = 'text', ...HTMLAttributesProps }, ref) {
    return (
      <div>
        <label>{label}</label>
        <input type={type} ref={ref} {...HTMLAttributesProps} />
        <FormErrorMessage name={HTMLAttributesProps.name} />
      </div>
    );
  }
);
