import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Design/Footer/Footer';
import Navbar from './components/Design/Navbar/Navbar';

import { MainContainer } from './assets/styles/common/PageLayout.style';

function Layout() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Layout;
