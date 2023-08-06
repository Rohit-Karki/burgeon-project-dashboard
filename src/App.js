import { useQuery } from "react-query";
import { handleAuth } from "./queriesAndmutations/auth/index";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const { isLoading, isError, data, error } = useQuery(
    "auth-token",
    handleAuth
  );
  const navigate = useNavigate();

  return (
    <>
      <Box
        display="flex"
        w="100%"
        justifyContent="start"
        alignItems="space-between"
        h="100%"
        borderRight="1px"
        borderRightColor="gray.200"
      >
        <Sidebar />
        <Box w="100%" id="detail">
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
export default App;
