"use client";
import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineDatabase,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { useParams } from "react-router-dom";


function SidebarNavigation() {
  const params = useParams();
  const colors = ["gray.100"];
  // const pathName = params.pathname.slice(1, params.pathname.length);
  const pathName = 'dashboard'
  const color = "#22c35e";
  return (
    <>
      <Box overflowY="scroll">
        <DisplayInfo
          isSelected={pathName == "dashboard"}
          name="Dashboard"
          pathname="dashboard"
        />
        <DisplayInfo
          isSelected={pathName == "calendar"}
          name="Calendar"
          pathname="calendar"
        />
        <DisplayInfo
          isSelected={pathName == "messenger"}
          name="Messenger"
          pathname="messenger"
        />
        <DisplayInfo
          isSelected={pathName == "database"}
          name="Database"
          pathname="database"
        />
        <DisplayInfo
          isSelected={pathName == "cbtscores"}
          name="CBT Sores"
          pathname="cbtscores"
        />
        <DisplayInfo
          isSelected={pathName == "attendance"}
          name="Attendance"
          pathname="attendance"
        />
        <DisplayInfo
          isSelected={pathName == "settings"}
          name="Settings"
          pathname="settings"
        />
      </Box>
    </>
  );
}

function DisplayInfo(props) {
  const iconsMap = new Map([
    ["Dashboard", AiOutlineDashboard],
    ["Calendar", AiOutlineCalendar],
    ["Messenger", AiOutlineMessage],
    ["Attendance", AiOutlineBarChart],
    ["CBT Scores", AiOutlineBarChart],
    ["Settings", AiOutlineSetting],
    ["Database", AiOutlineDatabase],
  ]);
  return (
    <>
      <Box
        m="20px "
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        {props.isSelected ? (
          <>
            <Icon color="#22c35e" w="2rem" h="2rem" as={iconsMap.get(props.name)} />
            <a href={props.pathname}>
              <Text color="#22c35e" pl="10px">
                {props.name}
              </Text>
            </a>
          </>
        ) : (
          <>
            <Icon color="gray.500" w="2rem" h="2rem" as={iconsMap.get(props.name)} />
            <a href={props.pathname}>
              <Text color="gray.500" pl="10px">
                {props.name}
              </Text>
            </a>
          </>
        )}
      </Box>
    </>
  );
}

export default SidebarNavigation;
