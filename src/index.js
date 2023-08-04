import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./pages/login";
import Sidebar from "./components/Sidebar";
import Database from "./pages/database";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Settings from "./pages/settings";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <>
        <Box
          w="20vw"
          h="100%"
          position="fixed"
          top="0"
          left="0"
          borderRight="1px"
          borderRightColor="gray.200"
        >
          <Sidebar />
        </Box>
        <Database />
      </>
    ),
  },
  {
    path: "/settings",
    element: (
      <>
        <Box
          w="20vw"
          h="100%"
          position="fixed"
          top="0"
          left="0"
          borderRight="1px"
          borderRightColor="gray.200"
        >
          <Sidebar />
        </Box>
        <Settings />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
