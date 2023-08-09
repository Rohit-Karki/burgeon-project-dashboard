import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { columns } from "../../utils/dashboard/index";
import { SearchValueContext } from "./MainContent";
import AllAttendeesTable from "./AllAttendeesTable";
import { fetchAllAttendances } from "../../queriesAndmutations/allattendance";
import Search from "../common/Search";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from "@ajna/pagination";

function AllAttendees() {
  const { searchValue } = useContext(SearchValueContext);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
  });

  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize,
  } = usePagination({
    total: pagination?.totalCount || 200,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: pagination?.pageSize || 10,
      isDisabled: false,
      currentPage: pagination?.currentPage || 1,
    },
  });

  const {
    isLoading,
    isError,
    data: responseData,
    error,
  } = useQuery({
    queryKey: ["all-attendance", currentPage],
    queryFn: async ({ queryKey }) => {
      return fetchAllAttendances(queryKey[1] || 1);
    },
  });

  useEffect(() => {
    if (responseData) {
      const matchedDatas = responseData?.data?.filter((d) =>
        d?.user.name.toLowerCase().startsWith(searchValue)
      );
      const tempData = matchedDatas?.map((d) => {
        return {
          id: d?.user._id,
          firstAttendance: d?.firstAttendance,
          lastAttendance: d?.lastAttendance,
          image: d?.image,
          name: d?.user.name,
        };
      });
      setData(tempData);
    }
  }, [searchValue]);

  useEffect(() => {
    if (responseData) {
      const tempData = responseData?.data.map((d) => {
        return {
          id: d?.user._id,
          firstAttendance: d?.firstAttendance,
          lastAttendance: d?.lastAttendance,
          image: d?.image,
          name: d?.user.name,
          code: d?.user.userCode,
        };
      });
      setPagination(responseData?.pagination);
      setData(tempData);
    }
  }, [responseData]);

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  if (isLoading) {
    return (
      <Card marginBottom="2rem">
        <CardHeader>
          <Search isDisabled />
        </CardHeader>
        <CardBody>
          <Stack padding="0">
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
            <HStack>
              <SkeletonCircle size="8" />
              <Box w="100%">
                <Skeleton height="20px" w="100%" />
              </Box>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    );
  }

  if (!isLoading && !isError)
    return (
      <>
        <Card marginBottom="2rem">
          <CardHeader paddingBottom="0px">
            <Search isDisabled={false} />
          </CardHeader>
          <CardBody>
            <AllAttendeesTable data={data} columns={columns} />
          </CardBody>

          <CardFooter>
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              isDisabled={isDisabled}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="space-between"
                p={4}
                w="full"
              >
                <PaginationPrevious
                  _hover={{
                    bg: "yellow.400",
                  }}
                  bg="yellow.300"
                  isDisabled={isDisabled}
                  // onClick={() => console.warn("I'm clicking the previous")}
                >
                  <Text>Previous</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                  align="center"
                  separator={
                    <PaginationSeparator
                      isDisabled={isDisabled}
                      // onClick={() => console.warn("I'm clicking the separator")}
                      bg="blue.300"
                      fontSize="sm"
                      w={7}
                      jumpSize={11}
                    />
                  }
                >
                  {pages.map((page) => (
                    <PaginationPage
                      w={7}
                      bg="red.300"
                      key={`pagination_page_${page}`}
                      page={page}
                      // onClick={() => console.warn("Im clicking the page")}
                      fontSize="sm"
                      _hover={{
                        bg: "green.300",
                      }}
                      _current={{
                        bg: "green.300",
                        fontSize: "sm",
                        w: 7,
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  _hover={{
                    bg: "yellow.400",
                  }}
                  bg="yellow.300"
                  onClick={() => console.warn("I'm clicking the next")}
                >
                  <Text>Next</Text>
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </CardFooter>
        </Card>
      </>
    );
}

export default AllAttendees;
