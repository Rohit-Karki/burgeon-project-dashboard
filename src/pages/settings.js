import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import TabContainer from "./../components/settings/TabContainer";

function Settings() {
  return (
    <Flex flexDirection="column">
      <Box marginTop="2rem">
        <Text fontWeight="extrabold" fontSize="4xl">
          Settings
        </Text>
      </Box>
      <TabContainer />
    </Flex>
  );
}

export default Settings;
