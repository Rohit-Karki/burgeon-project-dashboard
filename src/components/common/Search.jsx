import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box pt="12px" pb="15px">
      <Input
        background="gray.200"
        w="50%"
        placeholder="Search for Students,Teachers"
      />
    </Box>
  );
};

export default Search;
