import styled from 'styled-components';

import { ButtonProps } from './Button.style.type';

export const ButtonWrapper = styled.div``;

export const Button = styled.button<ButtonProps>`
  display: ${({ display }) => display};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
`;
