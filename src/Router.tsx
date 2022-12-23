import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Layout from './assets/Layout';
import Home from './pages/Home/Home';

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
