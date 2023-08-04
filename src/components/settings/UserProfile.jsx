import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserProfile = () => {
  return (
    <Box w="70%" display="flex" flexDirection="column" pr="2rem" pl="2rem">
      <Box display="flex" columnGap="4rem" pt="1rem">
        <Box>
          <Avatar
            size="2xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" >
          <Text fontWeight="extrabold">Dan Abramov</Text>
          <Box display="flex" flexDirection="column" rowGap="0.2rem" pt="1rem">
          <Text>As89932</Text>
          <Text>Student</Text>
          </Box>
        </Box>
      </Box>
      <Box
        w="100%"
        display="flex"
        pt="3rem"
        flexDirection="column"
        columnGap="2rem"
        rowGap="2rem"
        justifyContent="space-between"
      >
        <Box w="100%" display="flex" justifyContent="space-between">
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Gender</Text>
            <Text>Male</Text>
          </Box>
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Age</Text>
            <Text>21</Text>
          </Box>
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Date of Birth</Text>
            <Text>2002-12-11</Text>
          </Box>
        </Box>
        <Box w="100%" display="flex" justifyContent="space-between">
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Phone</Text>
            <Text>9867427171</Text>
          </Box>
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Email</Text>
            <Text>rohitkarki@gmail.com</Text>
          </Box>
          <Box w="33%" display="flex" flexDirection="column" rowGap="0.5rem">
            <Text fontWeight="bold">Address</Text>
            <Text>Butwal</Text>
          </Box>
        </Box>

        <Box display="flex">
          <Box display="flex" flexDirection="column" rowGap="1rem" w="70%">
            <Text fontWeight="bold">About</Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              fugiat illo temporibus rem neque distinctio eos atque at voluptas
              dignissimos.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
