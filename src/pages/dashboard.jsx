import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MainContent from "../components/dashboard/MainContent";

export default function Dashboard() {
  return (
    <>
      <Flex ml="20vw">
        <Box w="100%" flex="5" borderRight="1px" borderRightColor="gray">
          <MainContent />
        </Box>
      </Flex>
    </>
  );
}
