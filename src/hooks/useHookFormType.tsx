/**
 * useForm : we import useForm hook
 * UseFormProps : typescript types of useForm props
 * UseFormReturn: return type of useForm hook
 * FieldValues : typescript type of form's field values
 * SubmitHandler : type of submit handler event
 * FormPropsWithZod : additional option that would be our zod schema.
 * FormProps :
 *  we omit the native `onSubmit` event in favor of `SubmitHandler` event
 *  the beauty of this is, the values returned by the submit handler are fully typed
 * */

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
  hookFormReturn: UseFormReturn<T>;
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

  const zodValueWithHookForm = ApplyingZodValidation({
    schema: signUpFormSchema,
  });

  return { zodValueWithHookForm };
}

export default useHookFormType;
