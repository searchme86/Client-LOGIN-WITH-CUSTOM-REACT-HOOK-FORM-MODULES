import React, { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  width?: number;
  padding: number;
  margin: number;
}
