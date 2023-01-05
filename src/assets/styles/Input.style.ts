import styled, { css } from 'styled-components';

import { InputProps } from './Input.style.type';

export const InputContainer = styled.div<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
export const InputWrapper = styled.div<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding || 0};
  box-sizing: border-box;
`;

export const InputLabel = styled.label<InputProps>`
  line-height: 1;
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ LabelHide }) =>
    LabelHide &&
    css`
      display: inline-block;
      position: absolute;
      overflow: hidden;
      border: 0;
      width: 1px;
      height: 1px;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
    `}
`;
