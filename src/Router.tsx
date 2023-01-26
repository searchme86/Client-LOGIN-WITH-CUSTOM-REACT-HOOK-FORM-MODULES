import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import RequireAuth from '@config/auth/authRequired';

import Home from '@pages/home';
import Login from '@pages/user/login/login';
import Register from '@pages/user/register/register';
import Unauthorized from '@pages/unauthorized';
import Editor from '@pages/editor';
import Admin from '@pages/admin';
import User from '@pages/user/user';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/user" element={<User />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
