import React, { ComponentProps } from 'react';

export interface CustomInputProps extends ComponentProps<'input'> {
  label: string;
}

export interface CustomSelectProps extends ComponentProps<'select'> {
  label: string;
}
