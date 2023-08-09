import { Avatar, Text, WrapItem } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("image", {
    cell: (props) => {
      return (
        <Link to={`/logs/${props.row.original.code}`}>
          <WrapItem>
            <Avatar src={props.getValue} name={props.row.original.name} />
          </WrapItem>
        </Link>
      );
    },
    header: "Image",
  }),
  columnHelper.accessor("name", {
    cell: (info) => <Text fontWeight="bold">{info.getValue()}</Text>,
    header: "Name",
  }),
  columnHelper.accessor("firstAttendance", {
    cell: (info) => info.getValue(),
    header: "In-Time",
  }),
  columnHelper.accessor("lastAttendance", {
    cell: (info) => info.getValue(),
    header: "Last Tapped",
  }),
];

export { columns };
