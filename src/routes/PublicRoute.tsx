import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const PublicRoute: React.FC = () => {
  const userContext = useContext(UserContext);

  // Verificar si el contexto está disponible
  if (!userContext) {
    throw new Error('PublicRoute must be used within a UserProvider');
  }

  const { auth } = userContext;

  return auth === false ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
