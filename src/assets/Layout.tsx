import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Design/Footer/Footer';
import Navbar from '../components/Design/Navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
