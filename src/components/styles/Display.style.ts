import styled from 'styled-components';
import { StyleProps } from './common/style.type';

export const List = styled.ul<StyleProps>`
  display: ${({ display }) => display || `block`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-itmes: ${({ alignItems }) => alignItems};
`;

export const Li = styled.li<StyleProps>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const ContentBox = styled.div<StyleProps>`
  display: ${({ display }) => display || `block`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
`;

export const ImageFileNameView = styled.div<StyleProps>`
  display: ${({ display }) => display || `block`};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  box-sizing: border-box;
`;
