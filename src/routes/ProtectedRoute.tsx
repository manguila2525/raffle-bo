import { Navigate, Outlet } from 'react-router-dom';
import {  useMemo } from 'react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const {token} = useAuth()
  return useMemo(() => {
    return token ? <Layout><Outlet /></Layout> : <Navigate to="/" replace />;
  }, [token]);

};

export default ProtectedRoute;

