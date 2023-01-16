import styled, { css } from 'styled-components';

const containerCenterStyle = css`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const MainContainer = styled.main`
  ${containerCenterStyle}
`;

export const FooterContainer = styled.footer`
  ${containerCenterStyle}
`;

export const PageContainer = styled.div`
  ${containerCenterStyle}
`;
