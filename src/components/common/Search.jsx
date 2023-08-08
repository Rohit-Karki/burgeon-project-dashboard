import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { SearchValueContext } from "../dashboard/MainContent";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  const value = useContext(SearchValueContext);
  console.log(value);
  return (
    <Box pt="12px" pb="15px">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          background="gray.200"
          w="50%"
          placeholder="Search for Students"
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
