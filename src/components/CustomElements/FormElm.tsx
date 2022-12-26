import React from 'react';

import { FormProvider, FieldValues } from 'react-hook-form';
import { FormProps } from '../../hooks/useHookFormType';

function FormElm<T extends FieldValues>({
  hookFormReturn,
  onSubmit,
  children,
  ...HTMLAttributesPropsBasedElm
}: FormProps<T>) {
  return (
    <FormProvider {...hookFormReturn}>
      <form
        onSubmit={hookFormReturn.handleSubmit(onSubmit)}
        {...HTMLAttributesPropsBasedElm}
      >
        <fieldset disabled={hookFormReturn.formState.isSubmitting}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
}

export default FormElm;
