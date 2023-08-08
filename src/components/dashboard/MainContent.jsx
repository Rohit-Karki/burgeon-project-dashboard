"use client";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ContentNavbar from "../ContentNavbar";
import Search from "../common/Search";
import AllAttendees from "./AllAttendees";
import Welcome from "./Welcome";

export const SearchValueContext = React.createContext(null);

function MainContent() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      <Box w="100%" display="flex" flexDirection="column" gap="1rem">
        <ContentNavbar />
        <Welcome />
        <AllAttendees />
      </Box>
    </SearchValueContext.Provider>
  );
}

export default MainContent;
