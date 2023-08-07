import { Avatar, Box, Icon, Text, WrapItem } from "@chakra-ui/react";
import React from "react";
import { AiFillNotification, AiOutlineDown } from "react-icons/ai";

const UserPreview = ({ data }) => {
  return (
    <Box
      p="20px 60px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Icon color="gray.300" as={AiFillNotification} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Box>
      <Text fontWeight="bold">1</Text>
      <Icon color="gray" as={AiOutlineDown} />
    </Box>
  );
};

export default UserPreview;
