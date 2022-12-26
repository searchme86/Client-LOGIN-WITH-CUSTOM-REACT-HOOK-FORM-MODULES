import React from 'react';
import { FormProvider, FieldValues } from 'react-hook-form';
import { FormProps } from '../../hooks/useHookFormType';

function FormElm<T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  );
}

export default FormElm;
