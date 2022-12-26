import React, { ComponentProps } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';

import { ZodSchema, TypeOf } from 'zod';

import { signUpFormSchema } from '../pages/User/Login/LoginUtils/LoginValidationSchema';

interface FormPropsWithZod<T extends ZodSchema<any>>
  extends UseFormProps<TypeOf<T>> {
  schema: T;
}

export interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

function useHookFormType() {
  const ApplyingZodValidation = <T extends ZodSchema<any>>({
    schema,
    ...formConfig
  }: FormPropsWithZod<T>) => {
    return useForm({
      ...formConfig,
      resolver: zodResolver(schema),
    });
  };

  const form = ApplyingZodValidation({
    schema: signUpFormSchema,
  });

  return { form };
}

export default useHookFormType;
