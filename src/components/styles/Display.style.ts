import styled from 'styled-components';
import { StyleProps } from './common/Style.type';

export const UlList = styled.ul<StyleProps>`
  display: ${({ display }) => display || `block`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-itmes: ${({ alignItems }) => alignItems};
`;

export const UlLi = styled.li<StyleProps>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const DisplayContainer = styled.div<StyleProps>`
  display: ${({ display }) => display || `block`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
`;

export const DisplayItem = styled.div<StyleProps>`
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
