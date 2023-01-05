import styled from 'styled-components';
import { StyleProps } from './common/Style.type';

export const ButtonWrapper = styled.div``;

export const Button = styled.button<StyleProps>`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => fontColor};
  text-align: center;
  cursor: pointer;
`;
