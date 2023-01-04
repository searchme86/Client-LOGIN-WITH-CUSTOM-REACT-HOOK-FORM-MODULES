import React from 'react';
import { useFormContext } from 'react-hook-form';

import CheckBoxElmMessage from './CheckBoxElmMessage';
import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxTitle,
  CheckboxContainer,
} from './CustomElm.style';

function CustomCheckbox<Model extends Record<string, any>>({
  zodValidationKey,
  text,
}: {
  zodValidationKey: keyof Model;
  text: string;
}) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={zodValidationKey.toString()}
        {...register(zodValidationKey.toString())}
        disabled={isSubmitting}
      />
      <CheckboxLabel htmlFor={zodValidationKey.toString()}>
        <CheckboxTitle>{text}</CheckboxTitle>
      </CheckboxLabel>

      <CheckBoxElmMessage />
    </CheckboxContainer>
  );
}

export default CustomCheckbox;
