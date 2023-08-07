import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MainContent from "../components/dashboard/MainContent";
import { useQuery } from "react-query";
import { fetchAllAttendances } from "../queriesAndmutations/allattendance";
import UserPreview from "../components/common/UserPreview";

export default function Dashboard() {
  return (
    <>
      <Flex>
        <Box
          display="flex"
          flexDirection="row"
          w="100%"
          flex="5"
          borderRight="1px"
          borderRightColor="gray"
        >
          <MainContent />
          <UserPreview />
        </Box>
      </Flex>
    </>
  );
}
