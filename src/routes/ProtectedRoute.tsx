import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../context/UserContext";

const ProtectedRoute: React.FC = () => {
  const userContext = useContext(UserContext);

  // Verificar si el contexto está disponible
  if (!userContext) {
    throw new Error("ProtectedRoute must be used within a UserProvider");
  }

  const { auth } = userContext;

  return auth === true ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

