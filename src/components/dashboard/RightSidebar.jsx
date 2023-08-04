import { Box } from "@chakra-ui/react";
import React from "react";
import UserPreview from "../common/UserPreview";
import { Student, StudentsData } from "../database/Tabs/StudentTab";
import Calendar from "../common/Calendar";

const RightSidebar = () => {
  const student = StudentsData[0];
  return (
    <Box>
      <UserPreview student={student as Student} />
      {/* <Calendar/> */}
    </Box>
  );
};

export default RightSidebar;
