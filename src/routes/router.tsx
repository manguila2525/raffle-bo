import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { UsersView } from '../views/LoginView/Users/UsersView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <div>Login</div>, 
      },
    ],
    errorElement: <></>,
  },
  {
    path: 'dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <UsersView/>,
      },
    ],
  },
]);
