import styled from 'styled-components';

export const HeaderLogoSection = styled.section`
  position: relative;
  margin-right: 1rem;
`;

export const HeaderLogo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 20px;

  @media screen and (min-width: 800px) {
    padding: 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const HeaderToggleBtn = styled.button`
  font-size: 1.5rem;
  color: hsl(205, 78%, 60%);
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: hsl(205, 86%, 17%);
    transform: rotate(90deg);
  }

  @media screen and (min-width: 800px) {
    display: none;
  }

  @media screen and (max-width: 799px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const HeaderMuenu = styled.div`
  display: flex;
  height: auto !important;
  overflow: hidden;
  transition: all 0.3s linear;
  margin-right: 1rem;

  @media screen and (max-width: 800px) {
    margin-right: 0;
    height: auto !important;
  }
`;

export const HeaderMenuList = styled.ul`
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const HeaderMenuLi = styled.li`
  width: 100px;
  text-align: center;
  padding: 0.5rem 1rem;
  transition: all 0.3s linear;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
