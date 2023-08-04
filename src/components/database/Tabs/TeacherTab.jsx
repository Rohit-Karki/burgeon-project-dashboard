import React from "react";
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
} from "@chakra-ui/react";

function TeacherTab() {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Teacher Database</TableCaption>
          <Thead>
            <Tr pb="20px">
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Name
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  ID
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Room No
                </Text>
              </Th>
              {/* <Th><Text fontSize="1xl" fontWeight="extrabold">Age</Text></Th> */}
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Gender
                </Text>
              </Th>
              <Th>
                <Text fontSize="1xl" fontWeight="extrabold">
                  Email
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Rupa Kshetri</Td>
              <Td>23444</Td>
              <Td>Block 8-202</Td>
              <Td>Female</Td>
              <Td>rohitkarki801@gmail.com</Td>
            </Tr>
            <Tr>
              <Td>Rupa Kshetri</Td>
              <Td>23444</Td>
              <Td>Block 8-202</Td>
              <Td>Female</Td>
              <Td>rohitkarki801@gmail.com</Td>
            </Tr>
            <Tr>
              <Td>Rupa Kshetri</Td>
              <Td>23444</Td>
              <Td>Block 8-202</Td>
              <Td>Female</Td>
              <Td>rohitkarki801@gmail.com</Td>
            </Tr>
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

export default TeacherTab;
