import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  borderRadius?: string;
  fontColor?: string;
}
