import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { columns } from "../../utils/dashboard/index";
import { SearchValueContext } from "./MainContent";
import AllAttendeesTable from "./AllAttendeesTable";
import { fetchAllAttendances } from "../../queriesAndmutations/allattendance";
import Search from "../common/Search";

function AllAttendees() {
  const { searchValue } = useContext(SearchValueContext);
  const {
    isLoading,
    isError,
    data: responseData,
    error,
  } = useQuery({
    queryKey: ["all-attendance"],
    queryFn: async ({ queryKey }) => {
      return fetchAllAttendances(1);
    },
  });
  const [data, setData] = useState([]);

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
        };
      });
      setData(tempData);
    }
  }, [responseData]);

  console.log(data);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (!isLoading && !isError)
    return (
      <Card>
        <CardHeader paddingBottom="0px">
          <Search />
        </CardHeader>
        <CardBody>
          <AllAttendeesTable data={data} columns={columns} />
        </CardBody>
      </Card>
    );
}

export default AllAttendees;
