import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { useProfileDataStore } from "../../zustandStores/userDataStore";

const Welcome = () => {
  const data = useProfileDataStore.getState().data;
  return (
    <Card>
      <CardBody p="21px">
        <Box display="flex" gap="1rem" alignItems="center">
          <WrapItem>
            <Avatar
              color="blackAlpha.400"
              name={data?.name}
              src={data?.profilePic}
              size="lg"
            />
          </WrapItem>
          <Box>
            <Heading size="md">Welcome Admin</Heading>
            <Text size="sm" color="gray.600">
              We're very happy to see you again on your personal dashboard
            </Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Welcome;
