import { Navigate, Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';

const PublicRoute: React.FC = () => {
  const {token} = useAuth()
  return useMemo(() => {
    return token ? <Navigate to="/dashboard" replace /> : <Outlet /> ;
  }, [token]);
};

export default PublicRoute;
