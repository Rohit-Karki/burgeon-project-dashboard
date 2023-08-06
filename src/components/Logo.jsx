"use client";
import React from "react";
// import KULogo from '../public/ku_logo.png';
import { Box, Spacer, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Box
      margin="0px 0px 82px 0px"
      height="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* <img width="50" src={KULogo} alt="ku logo" /> */}
      <Text p="8px" fontSize="2xl" fontWeight="bold">
        All Attendance
      </Text>
    </Box>
  );
}

export default Logo;
