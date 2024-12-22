import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { UsersView } from "../views/Users/UsersView";
import LoginView from "../views/LoginView/LoginView";
import Layout from "../components/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <LoginView />,
      },
    ],
    errorElement: <div>Error: Página no encontrada</div>,
  },
  {
    path: "dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Layout children={<UsersView />} />,
      },
    ],
  },
]);
