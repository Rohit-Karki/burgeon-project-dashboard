import { useQuery } from "react-query";
import { handleAuth } from "./queriesAndmutations/auth/index";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="space-between"
        w="100%"
        h="100%"
        gap="2rem"
      >
        <Sidebar />
        <Box
          bg="gray.100"
          marginLeft="280px"
          h="100%"
          w="100%"
          paddingX="2rem"
          id="detail"
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
export default App;
