import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { UsersView } from '../views/Users/UsersView';
import { RafflesView } from '../views/RafflesView/RafflesView';
import {LoginView} from '../views/LoginView/LoginView'
import {RaffleCreateView} from '../views/RaffleCreateView/RaffleCreateView'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <LoginView/>, 
      },
    ],
    errorElement: <></>,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        index:true,
        element:<UsersView/>,
      },
      {
        path:'users',
        element:<UsersView/>,
      },
      {
        path:'raffles',
        children: [
          {
            index:true,
            element:<RafflesView/>,
          },
          {
            path:'create-raffle',
            element:<RaffleCreateView/>
          }
        ]
      }
    ],
  },
]);
