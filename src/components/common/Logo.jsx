"use client";
import React from "react";
// import KULogo from '../public/ku_logo.png';
import { Box, Spacer, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Box display="flex">
      {/* <img width="50" src={KULogo} alt="ku logo" /> */}
      <Text fontSize="2xl" fontWeight="bold">
        All Attendance
      </Text>
    </Box>
  );
}

export default Logo;
