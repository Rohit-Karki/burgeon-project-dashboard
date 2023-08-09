import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import UserPreview from "../components/common/UserPreview";
import LogTable from "../components/logs/LogTable";

const PersonLogs = () => {
  return (
    <>
      <Box w="100%" display="flex" gap="2rem">
        <UserPreview />
        <LogTable />
      </Box>
    </>
  );
};

export default PersonLogs;
