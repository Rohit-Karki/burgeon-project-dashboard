import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineDown,
  AiFillNotification,
  AiOutlineEdit,
  AiOutlineMessage,
  AiOutlinePhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { Student, StudentsData } from "./database/Tabs/StudentTab";
import UserPreview from "./common/UserPreview";

function Details() {
  // const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  // const student = StudentsData.find((student) => student.id === selectedId);
  return (
    <>
      <Box>
        {/* <UserPreview student={student} />
        <UserDetail student={student} /> */}
      </Box>
    </>
  );
}

function UserDetail(props) {
  return (
    <>
      <Box display="flex" flexDirection="column" px="40px" pt="80px">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text color="gray.500">{props.student?.id.toString()}</Text>
          {/* <Icon justifySelf="end" as={AiOutlineEdit} /> */}
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <WrapItem>
            <Avatar size="2xl" name="Dan Abrahmov" src={props.student.avatar} />
          </WrapItem>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="2xl" fontWeight="bold">
            {props.student.name}
          </Text>
          <Text textAlign="center" color="gray.500" fontWeight="bold">
            {props.student.department}
          </Text>
        </Box>
        <Box py="20px">
          <Stack
            display="flex"
            justifyContent="center"
            sx={{ borderRadius: "10%" }}
            direction="row"
            spacing={4}
            align="center"
          >
            <Button borderRadius="40%">
              <Icon as={AiOutlineMessage} />
            </Button>
            <Button borderRadius="40%">
              <Icon as={AiOutlinePhone} />
            </Button>
            <Button borderRadius="40%">
              <Icon as={AiTwotoneMail} />
            </Button>
          </Stack>
        </Box>
        <Box fontSize="1xl" display="flex" flexDirection="column">
          <Text fontWeight="bold">About</Text>
          <Text color="gray.500">{props.student.about}</Text>
        </Box>
        <Box pb="20px">
          <Box
            fontSize="1xl"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text w="50%" fontWeight="bold">
              Age
            </Text>
            <Text w="50%" fontWeight="bold">
              Gender
            </Text>
          </Box>
          <Box
            fontSize="1xl"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text w="50%" color="gray.500">
              {props.student.age.toString()}
            </Text>
            <Text w="50%" color="gray.500">
              {props.student.gender}
            </Text>
          </Box>
        </Box>
        <Box pb="20px">
          <Box
            fontSize="1xl"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text w="50%" fontWeight="bold">
              Date of Birth
            </Text>
            <Text w="50%" fontWeight="bold">
              Address
            </Text>
          </Box>
          <Box
            fontSize="1xl"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text w="50%" color="gray.500">
              {props.student.age}
            </Text>
            <Text w="50%" color="gray.500">
              {props.student.address}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Details;
