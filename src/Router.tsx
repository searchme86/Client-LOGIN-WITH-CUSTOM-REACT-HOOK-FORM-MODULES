import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home/Home';
import Login from './pages/User/Login/Login';
import Register from './pages/User/Register/Register';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
