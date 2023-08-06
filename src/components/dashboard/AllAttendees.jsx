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
import { Link } from "react-router-dom";

function AllAttendees({ datas }) {
  console.log(datas);
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
            </Tr>
          </Thead>
          <Tbody>
            {datas?.map((data) => {
              return (
                <Tr
                  // bg={selectedId == student.id ? bg : ""}
                  key={data.user._id}
                >
                  <Td>
                    <Link to={`/logs/${data.user._id}`}>
                      <Box
                        display="flex"
                        justifyContent="start"
                        alignItems="center"
                      >
                        <WrapItem>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
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
                    </Link>
                  </Td>
                  <Td>{data.user.name}</Td>
                  <Td>{data.firstAttendance}</Td>
                  <Td>{data.lastAttendance}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllAttendees;
