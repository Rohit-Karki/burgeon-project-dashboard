import {
  Avatar,
  Badge,
  Box,
  Button,
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
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";

const PersonLogs = () => {
  const { data: datas } = useLoaderData();
  const { personId } = useParams();
  const [date, setDate] = useState(new Date());

  const personLogs = useQuery({
    queryKey: ["person-logs", date],
    queryFn: () => fetchPersonLogs(personId, date.toLocaleDateString()),
    placeholderData: datas,
  });
  return (
    <>
      <Box w="100%" display="flex" flexDirection="column" alignItems="center">
        <h1>Person Logs</h1>
        <h1>Date :{date.toLocaleDateString()}</h1>
        <Box display="flex" justifyContent="center">
          <SingleDatepicker
            name="date-input"
            date={date}
            onDateChange={setDate}
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
                {personLogs.data.data?.map((data, index) => {
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
                              name="Dan Abrahmov"
                              src="https://bit.ly/dan-abramov"
                            />
                          </WrapItem>
                        </Box>
                      </Td>
                      <Td>{data.time}</Td>
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
    </>
  );
};

export default PersonLogs;
