import styled from 'styled-components';

import { ButtonProps } from './Button.type';

// ======= 버튼의 요구조건
// 가로 조정가능 (max)width
// 높이 조정가능 height
// 패딩과 마진을 조정가능
// border-radius
//

export const ButtonWrapper = styled.div``;

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}rem`};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
`;
