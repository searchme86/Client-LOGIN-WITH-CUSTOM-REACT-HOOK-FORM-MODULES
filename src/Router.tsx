import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './assets/Layout';
import Home from './pages/Home/Home';
import Login from './pages/User/Login';
import Register from './pages/User/Register/Register';

// import NewAppSignup from './Test/NewAppSignup';
import NewAppSignup from './Test/NewAppSignup';
// import Version03Upload from '../backups/Tuploader/Version03Upload';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<NewAppSignup />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
