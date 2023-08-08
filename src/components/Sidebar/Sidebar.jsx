import { Box } from "@chakra-ui/react";
import React from "react";

import SidebarNavigation from "./SidebarNavigation";
import Logo from "../common/Logo";

function Sidebar() {
  return (
    <>
      <Box
        height="100vh"
        width="280px"
        top="0px"
        position="fixed"
        display="flex"
        flexDirection="column"
        padding="22px 25px"
        gap="20px"
      >
        <Logo />
        <SidebarNavigation />
      </Box>
    </>
  );
}

export default Sidebar;
