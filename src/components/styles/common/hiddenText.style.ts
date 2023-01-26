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

export const OffScreenSpan = styled.span`
  ${hiddenTextStyle}
`;

export const OffScreenTitle = styled.h1`
  ${hiddenTextStyle}
`;
