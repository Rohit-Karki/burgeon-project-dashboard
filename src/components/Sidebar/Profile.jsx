import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../queriesAndmutations/login";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustandStores/useAuthStore";
import { useProfileDataStore } from "../../zustandStores/userDataStore";

const Profile = () => {
  const navigate = useNavigate();
  const data = useProfileDataStore.getState().data;
  return (
    <>
      <Box w="100%">
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            w="100%"
            position="relative"
            marginBottom="1.6rem"
          >
            <Box rounded="lg" bg="gray.200" w="100%" h="100px"></Box>
            <Box
              display="flex"
              justifyContent="center"
              w="100%"
              position="absolute"
              bottom="-30px"
            >
              <Box rounded="full" border="6px solid white">
                <Avatar
                  size="md"
                  name={data?.name}
                  color="black"
                  src={data?.profilePic}
                />
              </Box>
            </Box>
          </Box>
          <Spacer h="0.5rem" />
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="0.5rem"
          >
            <Box display="flex" gap="0.2rem">
              <Text fontSize="md" fontWeight="bold">
                {data?.name}
              </Text>
              <Box>
                <Badge colorScheme="green">{data?.role}</Badge>
              </Box>
            </Box>
            <Button
              onClick={() => {
                logoutUser();
                navigate("/login");
              }}
              leftIcon={<Icon as={FiLogOut} />}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
