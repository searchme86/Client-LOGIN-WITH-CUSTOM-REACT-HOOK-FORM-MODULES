import React, { ComponentProps } from 'react';

export interface CustomInputProps extends ComponentProps<'input'> {
  label: string;
}
