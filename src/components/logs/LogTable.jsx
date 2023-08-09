import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
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
import { useQuery } from "react-query";
import { format } from "date-fns";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { fetchPersonLogs } from "../../queriesAndmutations/logs";
import { useLoaderData, useParams } from "react-router-dom";

const LogTable = () => {
  const [_, { data: datas }] = useLoaderData();
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
      <Box w="100%" display="flex" flexDirection="column" paddingRight="30px">
        <Box w="100%" py="15px">
          <Heading>Person Logs</Heading>
        </Box>

        <Card
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <CardHeader>
            <Heading size="md" color="gray">
              Select Time
            </Heading>
          </CardHeader>
          <CardBody maxW="fit-content">
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />
          </CardBody>
        </Card>

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
    </>
  );
};

export default LogTable;
