import styled from 'styled-components';

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
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

export const FooterContainer = styled.footer`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

export const PageContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;
