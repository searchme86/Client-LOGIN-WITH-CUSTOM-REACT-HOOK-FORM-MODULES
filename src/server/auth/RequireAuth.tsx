import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../context/NewContext';

const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
  console.log('allowedRoles', allowedRoles);
  const location = useLocation();
  const { contextValue } = useStateContext();

  return contextValue?.authUser.roles?.find((role: number) =>
    allowedRoles?.includes(role)
  ) ? (
    <Outlet />
  ) : contextValue?.authUser ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
