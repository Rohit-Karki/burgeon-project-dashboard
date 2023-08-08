"use client";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { FaAlignLeft } from "react-icons/fa";
function ContentNavbar() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py="15px"
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          gap="1rem"
        >
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaAlignLeft size="1.6rem" color="#22c35e" />
          </Box>
          <Heading size="lg">Dashboard</Heading>
        </Box>
      </Box>
    </>
  );
}

export default ContentNavbar;
