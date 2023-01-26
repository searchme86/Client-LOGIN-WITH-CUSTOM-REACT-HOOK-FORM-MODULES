import styled from 'styled-components';

import { StyleProps } from './common/style.type';

export const ImageContainer = styled.div<StyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  overflow: hidden;
`;

export const ImageHolder = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  overflow: hidden;
  background: #f2f2f2;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export const ImageButton = styled.label<StyleProps>`
  text-align: center;
  width: 85px;
  margin: 0 auto;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid red;
`;

export const ImageTitle = styled.p<StyleProps>`
  margin: 10px 0 5px 0;
  font-style: italic;
  font-weight: 600;
  text-align: center;
`;

export const ImageErrorMessage = styled.p<StyleProps>`
  font-size: 13px;
  margin: 5px 0 0 5px;
  color: #ff3333;
  font-weight: bold;
`;
