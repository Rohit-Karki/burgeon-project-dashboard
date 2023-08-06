import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: (
          <>
            <Dashboard />
          </>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/settings",
        element: (
          <>
            <Settings />
          </>
        ),
      },
    ],
  },
]);

export default router;
