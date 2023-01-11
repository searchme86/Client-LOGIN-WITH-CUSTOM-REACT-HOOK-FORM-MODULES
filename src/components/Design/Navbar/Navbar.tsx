import React, { useState, useRef, useLayoutEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import './index.css';

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const HeaderContainerRef = useRef<HTMLDivElement>(null);
  const ListContainerRef = useRef<HTMLUListElement>(null);
  const clickBtnMenuHidden = () => {
    setIsMenuShown((prev) => !prev);
  };
  useLayoutEffect(() => {
    if (ListContainerRef.current) {
      const MenuAreaHeight =
        ListContainerRef.current.getBoundingClientRect().height;
      if (isMenuShown && HeaderContainerRef.current) {
        HeaderContainerRef.current.style.height = `${MenuAreaHeight}px`;
      } else if (!isMenuShown && HeaderContainerRef.current) {
        HeaderContainerRef.current.style.height = '0px';
      }
    }
  }, [isMenuShown]);
  return (
    <header className="nav-center">
      <div className="logo-section">
        <h1 className="nav-header">
          <div className="nav-logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </h1>
        <button className="nav-toggle" onClick={clickBtnMenuHidden}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={HeaderContainerRef}>
        <nav role="navigation">
          <ul className="links" ref={ListContainerRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="">
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
