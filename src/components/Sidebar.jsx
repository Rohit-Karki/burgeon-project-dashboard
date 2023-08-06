import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import SidebarNavigation from "./SidebarNavigation";

function Sidebar() {
  return (
    <>
      <Box
        h="100vh"
        top="0px"
        position="sticky"
        px="2rem"
        borderRight="2px solid gray"
      >
        <Box>
          <Logo />
          <SidebarNavigation />
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
