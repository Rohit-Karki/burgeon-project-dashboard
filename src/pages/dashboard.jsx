import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MainContent from "../components/dashboard/MainContent";
import { useQuery } from "react-query";
import { fetchAllAttendances } from "../queriesAndmutations/allattendance";

export default function Dashboard() {
  const { isLoading, isError, data, error } = useQuery(
    "all-attendance",
    fetchAllAttendances
  );
  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
  if (data)
    return (
      <>
        <Flex>
          <Box w="100%" flex="5" borderRight="1px" borderRightColor="gray">
            <MainContent datas={data?.data} />
          </Box>
        </Flex>
      </>
    );
}
