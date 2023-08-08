import {
  Avatar,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const Welcome = () => {
  return (
    <Card>
      <CardBody p="21px">
        <Box display="flex" gap="1rem" alignItems="center">
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
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
