import React, { BaseSyntheticEvent } from 'react';
import { z } from 'zod';
import { Tiers } from './LoginFormData';
import { signUpFormSchema, validationSchema, FormSchema } from './LoginSchema';

export type TireIDType = typeof Tiers[number]['id'];

export const TireIDEnum: [TireIDType, ...TireIDType[]] = [
  Tiers[0].id,
  ...Tiers.slice(1).map((p) => p.id),
];

export type GenericOnSubmit = (
  data: Record<string, any>,
  event?: BaseSyntheticEvent
) => void;

export type FormSchemaType = z.infer<typeof FormSchema>;

export type ResetType = {
  values: FormSchemaType;
};

export type FormContextType = {
  register: (name: string, options?: any) => {};
};
