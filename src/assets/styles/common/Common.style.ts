import styled, { css } from 'styled-components';

export const hiddenTextStyle = css`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;

export const OffScreen = styled.p`
  ${hiddenTextStyle}
`;

export const OffScreenSpan = styled.span`
  ${hiddenTextStyle}
`;

export const OffScreenStrong = styled.strong`
  ${hiddenTextStyle}
`;

export const OffScreenTitle = styled.h1`
  ${hiddenTextStyle}
`;

export const BasicUl = styled.ul`
  margin: 0 auto;
`;

export const BasicLi = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
`;
