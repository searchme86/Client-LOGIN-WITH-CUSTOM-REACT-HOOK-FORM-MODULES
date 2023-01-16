import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '@context/index';
import { contextActionCreator } from '@context/contextConfig/contextActionCreator';

import LoginQuery from '../../../pages/User/Login/Query/LoginQuery';

import { FaBars } from 'react-icons/fa';
import { links } from './data';

import { HeaderContainer } from '@assets/styles/common/PageLayout.style';

import {
  HeaderLogoSection,
  HeaderLogo,
  HeaderToggleBtn,
  HeaderContent,
  HeaderMuenu,
  HeaderMenuList,
  HeaderMenuLi,
} from './NavBar.style';

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const HeaderContainerRef = useRef<HTMLDivElement>(null);
  const HeaderContentRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const {
    contextValue: { authUser },
    dispatch,
  } = useStateContext();
  const {
    LogoutQuery: { mutate: LogOut },
  } = LoginQuery();

  useLayoutEffect(() => {
    if (HeaderContentRef.current) {
      const MenuAreaHeight =
        HeaderContentRef.current.getBoundingClientRect().height;

      if (!isMenuShown && HeaderContainerRef.current) {
        HeaderContainerRef.current.style.height = `${MenuAreaHeight}px`;
      } else if (isMenuShown && HeaderContainerRef.current) {
        HeaderContainerRef.current.style.height = '0px';
      }
    }
  }, [isMenuShown]);

  const clickBtnMenuHidden = () => {
    setIsMenuShown((prev) => !prev);
  };

  const onLoginHandler = () => navigate('/login');

  const onLogoutHandler = () => {
    dispatch(contextActionCreator.setUserLogout());
    LogOut();
  };

  return (
    <HeaderContainer>
      <HeaderLogoSection>
        <HeaderLogo onClick={() => navigate('/')}>Home</HeaderLogo>
        <HeaderToggleBtn onClick={clickBtnMenuHidden}>
          <FaBars />
        </HeaderToggleBtn>
      </HeaderLogoSection>

      <HeaderMuenu ref={HeaderContainerRef}>
        <HeaderContent className="" ref={HeaderContentRef}>
          <nav role="navigation">
            <HeaderMenuList>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <HeaderMenuLi key={id}>
                    <a href={url}>{text}</a>
                  </HeaderMenuLi>
                );
              })}
            </HeaderMenuList>
          </nav>

          {authUser?.accessToken ? (
            <ul>
              <HeaderMenuLi>
                <button
                  type="button"
                  onClick={onLogoutHandler}
                  style={{
                    background: 'white',
                  }}
                >
                  Logout
                </button>
              </HeaderMenuLi>
            </ul>
          ) : (
            <ul>
              <HeaderMenuLi>
                <button
                  type="button"
                  onClick={onLoginHandler}
                  style={{
                    background: 'white',
                  }}
                >
                  LogIn
                </button>
              </HeaderMenuLi>
            </ul>
          )}
        </HeaderContent>
      </HeaderMuenu>
    </HeaderContainer>
  );
}

export default Navbar;
