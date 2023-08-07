import React, { useContext, useEffect, useState } from "react";
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
  WrapItem,
} from "@chakra-ui/react";
import { fetchAllAttendances } from "../../queriesAndmutations/allattendance";
import { Link } from "react-router-dom";
import { SearchValueContext } from "./MainContent";
import { useQuery } from "react-query";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  usePagination,
} from "@ajna/pagination";

function AllAttendees() {
  const { searchValue } = useContext(SearchValueContext);

  const [pagination, setPagination] = useState({});
  const outerLimit = 2;
  const innerLimit = 2;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    total: pagination?.totalCount,
    pagesCount: pagination?.totalPages,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      currentPage: 1,
      pageSize: pagination?.pageSize,
    },
  });
  const {
    isLoading,
    isError,
    data: datas,
    error,
  } = useQuery({
    queryKey: ["all-attendance", currentPage],
    queryFn: async ({ queryKey }) => {
      return fetchAllAttendances(queryKey[1]);
    },
  });
  const handlePageChnage = (nextPage) => {
    setCurrentPage(nextPage);
  };
  if (datas) {
    datas.data = datas.data.filter((data) => {
      return data?.user.name.toLowerCase().startsWith(searchValue);
    });
  }
  if (isLoading) {
    return <h1>Loading</h1>;
  }

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
            {datas?.data?.map((data) => {
              return (
                <Tr
                  // bg={selectedId == student.id ? bg : ""}
                  key={data?.user._id}
                >
                  <Td>
                    <Link to={`/logs/${data?.user._id}`}>
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
                  <Td>{data?.user.name}</Td>
                  <Td>{data?.firstAttendance}</Td>
                  <Td>{data?.lastAttendance}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" w="100%">
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChnage}
        >
          <PaginationContainer>
            <PaginationPrevious>Previous</PaginationPrevious>
            <PaginationPageGroup>
              {pages.map((page) => (
                <PaginationPage key={`pagination_page_${page}`} page={page} />
              ))}
            </PaginationPageGroup>
            <PaginationNext>Next</PaginationNext>
          </PaginationContainer>
        </Pagination>
      </Box>
    </>
  );
}

export default AllAttendees;
