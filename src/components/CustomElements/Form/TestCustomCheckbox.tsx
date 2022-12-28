import React from 'react';
import { useFormContext } from 'react-hook-form';

import CheckBoxElmMessage from './CheckBoxElmMessage';
import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxTitle,
  CheckboxContainer,
} from './CustomElm.style';

function TestCustomCheckbox({ name, text }: { name: string; text: string }) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={name}
        {...register(name)}
        disabled={isSubmitting}
      />
      <CheckboxLabel htmlFor={name}>
        <CheckboxTitle>{text}</CheckboxTitle>
      </CheckboxLabel>

      <CheckBoxElmMessage />
    </CheckboxContainer>
  );
}

export default TestCustomCheckbox;
