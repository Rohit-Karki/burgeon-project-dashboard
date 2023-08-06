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
  if (error?.message == "Not Authenticated") {
    navigate("/login");
  } else if (isLoading) {
    return <h1>Loading</h1>;
  } else if (data) {
    navigate("/dashboard");
    return (
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
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }
}
export default App;
