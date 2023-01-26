import React from 'react';
import { Outlet } from 'react-router';
import Footer from '@components/design/footer/footer';
import Navbar from '@components/design/navbar/navbar';

import { MainContainer } from '@components/styles/common/pageLayout.style';

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
