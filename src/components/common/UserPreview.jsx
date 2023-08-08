import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const UserPreview = ({ data }) => {
  return (
    <Box
      bg="gray.100"
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
      minWidth="380px"
    >
      <Box
        display="flex"
        flexDirection="column"
        w="100%"
        position="relative"
        marginBottom="3rem"
      >
        <Box bg="gray.200" w="100%" h="200px"></Box>
        <Box
          display="flex"
          w="100%"
          left="1rem"
          position="absolute"
          bottom="-50px"
        >
          <Box rounded="full" border="6px solid white">
            <Avatar
              size="xl"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </Box>
        </Box>
      </Box>

      <Box w="100%" padding="1rem">
        <Stack spacing="4">
          <Card maxW="sm" w="100%">
            <CardHeader padding="1rem" paddingBottom="0px">
              <Heading size="md">Personal Details</Heading>
            </CardHeader>
            <CardBody
              padding="1rem"
              display="flex"
              justifyContent="start"
              flexDirection="column"
            >
              <Box display="flex" gap="0.5rem">
                <Text fontWeight="bold">Rohit Raj Karki</Text>
                <Badge fontSize="0.8em" colorScheme="green">
                  User
                </Badge>
              </Box>
              <Text color="gray.600">rohit@gmail.com</Text>
            </CardBody>
          </Card>

          <Card maxW="sm" w="100%">
            <CardHeader padding="1rem" paddingBottom="0px">
              <Heading size="md">Organizational Details</Heading>
            </CardHeader>
            <CardBody
              padding="1rem"
              display="flex"
              justifyContent="start"
              flexDirection="column"
            >
              <Text fontWeight="bold">Burgeon Tech</Text>
              <Text color="gray.600">bgtech@gmail.com</Text>
            </CardBody>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserPreview;
