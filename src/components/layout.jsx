import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import Sidebar from "@/components/Sidebar";

const Layout = () => {
  return (

    <ChakraProvider>
      <Box
        w="20vw"
        position="fixed"
        top="0"
        left="0"
        borderRight="1px"
        borderRightColor="gray.200"
      >
        <Sidebar />
      </Box>
    </ChakraProvider>

  );
};

export default Layout;
