import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import Search from "../components/common/Search";
import TabContainer from "./../components/settings/TabContainer";

function Settings() {
  return (
    <Flex flexDirection="column" px="2rem">
      <Box>
        <Text fontWeight="extrabold" fontSize="2xl">
          Settings
        </Text>
      </Box>
      <TabContainer />
    </Flex>
  );
}

export default Settings;
