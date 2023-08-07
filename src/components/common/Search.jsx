import { Box, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { SearchValueContext } from "../dashboard/MainContent";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  const value = useContext(SearchValueContext);
  console.log(value);
  return (
    <Box pt="12px" pb="15px">
      <Input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        background="gray.200"
        w="50%"
        placeholder="Search for Students"
      />
    </Box>
  );
};

export default Search;
