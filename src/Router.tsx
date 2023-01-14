import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/User/Login/Login';
import Register from './pages/User/Register/Register';
import RequireAuth from './server/auth/AuthRequired';
import Unauthorized from './pages/Unauthorized';

import Editor from './pages/Editor';
import Admin from './pages/Admin';
import User from './pages/User/User';

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
