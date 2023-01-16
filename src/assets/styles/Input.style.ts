import styled, { css } from 'styled-components';
import { StyleProps } from './common/Style.type';
import { hiddenTextStyle } from './common/Common.style';

export const InputContainer = styled.div<StyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const InputWrapper = styled.div<StyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Input = styled.input<StyleProps>`
  display: block;
  width: 100%;
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding || 0};
  box-sizing: border-box;
`;

export const InputLabel = styled.label<StyleProps>`
  line-height: 1;
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ LabelHide }) =>
    LabelHide &&
    css`
      ${hiddenTextStyle}
    `}
`;
