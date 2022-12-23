import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Layout from './assets/Layout';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Router;
