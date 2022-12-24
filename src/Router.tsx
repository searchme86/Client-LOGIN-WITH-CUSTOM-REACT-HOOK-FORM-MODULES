import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './assets/Layout';
import Home from './pages/Home/Home';
import Login from './pages/User/Login';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
