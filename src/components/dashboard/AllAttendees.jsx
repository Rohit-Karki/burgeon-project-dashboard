import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  WrapItem,
} from "@chakra-ui/react";

export const StudentsData = [
  {
    id: 23330,
    avatar: "https://bit.ly/dan-abramov",
    name: "Rohit Raj Karki",
    email: "rohit.karki@gmail.com",
    gender: "Male",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsam provident nihil et unde cupiditate?",
    date: "2002-12-12",
    address: "100 B. S. Hood Rd, Butwal State - Lumbini.",
    age: 21,
    class: "CE-2020",
    department: "CSE",
  },
  {
    id: 233321,
    avatar: "https://bit.ly/dan-abramov",
    name: "Sangam Ghimire",
    email: "rohit.karki@gmail.com",
    gender: "Male",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt ipsam asperiores doloribus reiciendis neque consequatur optio iste veritatis dolore.",
    date: "2002-8-12",
    address: "75 B. S. Hood Rd, Mississippi State - Waze.",
    age: 21,
    class: "CE-2020",
    department: "CSE",
  },
];

function AllAttendees() {
  // const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const bg = "#22c35e";

  return (
    <>
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          <TableCaption>Student Database</TableCaption>
          <Thead>
            <Tr pb="20px">
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Photo
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  ID
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Name
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  In Time
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Last Tapped
                </Text>
              </Th>
              {/* <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  
                </Text>
              </Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {StudentsData.map((student) => {
              return (
                <Tr
                  // bg={selectedId == student.id ? bg : ""}
                  key={student.id.toString()}
                >
                  <Td>
                    <Box
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <WrapItem>
                        <Avatar name="Dan Abrahmov" src={student.avatar} />
                      </WrapItem>
                      {/* <Link
                        href="/"
                        onClick={() => {
                          setSelectedId(student.id);
                        }}
                      >
                        <Text pl="10px">{student.name} </Text>
                      </Link> */}
                    </Box>
                  </Td>
                  <Td>{student.id.toString()}</Td>
                  <Td>{student.name}</Td>
                  <Td>{student.age.toString()}</Td>
                  <Td>{student.gender}</Td>
                  <Td>{student.email}</Td>
                </Tr>
              );
            })}
          </Tbody>
          {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
        </Table>
      </TableContainer>
    </>
  );
}

export default AllAttendees;
