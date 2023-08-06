"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import ContentNavbar from "../ContentNavbar";
import Search from "../common/Search";
import AllAttendees from "./AllAttendees";

function MainContent() {
  return (
    <>
      <Box px="20px">
        <Search />
        <ContentNavbar />
        <AllAttendees />
      </Box>
    </>
  );
}

export default MainContent;
