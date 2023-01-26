import React, { BaseSyntheticEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormElementContainer } from '@components/styles/form.style';

type GenericOnSubmit = (
  data: Record<string, string>,
  event?: BaseSyntheticEvent
) => void;

function FormElement<
  DataSchema extends Record<string, string>,
  Schema extends z.Schema<any, any>
>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: {
  schema: Schema;
  onSubmit: (data: DataSchema, event?: BaseSyntheticEvent) => void;
  children: any;
  defaultValues?: Record<string, string>;
}) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleSubmit = methods.handleSubmit;

  return (
    <FormElementContainer margin="10px 0 10px 0">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>
          {children}
        </form>
      </FormProvider>
    </FormElementContainer>
  );
}

export default FormElement;
