import styled from 'styled-components';

import { InputProps } from './Input.style.type';

export const InputWrapper = styled.div<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => padding || 0};
  box-sizing: border-box;
`;

export const InputLabel = styled.label<InputProps>`
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
