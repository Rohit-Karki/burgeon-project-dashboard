import { createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import App from "../App";
import { handleAuth } from "../queriesAndmutations/auth";
import PersonLogs from "../pages/logs";
import { fetchPersonLogs } from "../queriesAndmutations/logs";

const router = createBrowserRouter([
  {
    path: "/login",
    loader: async () => {
      try {
        const data = await handleAuth();
        return redirect("/dashboard");
      } catch (err) {
        if (err) return null;
      }
      return null;
    },
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        const data = await handleAuth();
        return null;
      } catch (err) {
        if (err) return redirect("/login");
      }
      return null;
    },
    children: [
      {
        index: true,
        // path: "dashboard",
        element: (
          <>
            <Dashboard />
          </>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: (
          <>
            <Dashboard />
          </>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: (
          <>
            <Settings />
          </>
        ),
      },
      {
        path: "logs/:personId",
        element: (
          <>
            <PersonLogs />
          </>
        ),
        loader: async ({ params }) => {
          const personLogs = await fetchPersonLogs(params.personId, new Date());
          return personLogs;
        },
      },
      {
        path: "settings",
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
