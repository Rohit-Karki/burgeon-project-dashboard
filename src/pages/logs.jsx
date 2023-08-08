import {
  Avatar,
  Badge,
  Box,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  WrapItem,
} from "@chakra-ui/react";
import { fetchPersonLogs } from "../queriesAndmutations/logs";
import UserPreview from "../components/common/UserPreview";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { format } from "date-fns";

const PersonLogs = () => {
  const { data: datas } = useLoaderData();
  const { personId } = useParams();
  const [date, setDate] = useState(new Date());

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["person-logs", date],
    queryFn: ({ queryKey }) => {
      const formattedDate = format(date, "dd/MM/yyyy");
      return fetchPersonLogs(personId, formattedDate);
    },
    placeholderData: datas,
  });
  return (
    <>
      <Box w="100%" display="flex" gap="2rem">
        <UserPreview />
        <Box w="100%" display="flex" flexDirection="column">
          <Heading>Person Logs</Heading>
          <Box display="flex" justifyContent="center">
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
              // configs={{
              //   dateFormat: "yyyy-MM-dd",
              // }}
            />
          </Box>

          <Box w="100%">
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
                        Time
                      </Text>
                    </Th>
                    <Th>
                      <Text fontSize="1xl" fontWeight="extrabold">
                        In/Out
                      </Text>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.data?.map((data, index) => {
                    return (
                      <Tr
                        // bg={selectedId == student.id ? bg : ""}
                        key={data.user._id}
                      >
                        <Td>
                          <Box
                            display="flex"
                            justifyContent="start"
                            alignItems="center"
                          >
                            <WrapItem>
                              <Avatar
                                name={data.user.name}
                                src={data.user.photo}
                              />
                            </WrapItem>
                          </Box>
                        </Td>
                        <Td>{data?.time}</Td>
                        <Td>
                          {(index + 1) % 2 == 0 ? (
                            <Badge ml="1" fontSize="0.8em">
                              Out
                            </Badge>
                          ) : (
                            <Badge ml="1" fontSize="0.8em" colorScheme="green">
                              In
                            </Badge>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PersonLogs;
