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
import { Link, useParams } from "react-router-dom";

function SidebarNavigation() {
  const params = useParams();
  const colors = ["gray.100"];
  // const pathName = params.pathname.slice(1, params.pathname.length);
  const pathName = "dashboard";
  const color = "#22c35e";
  return (
    <>
      <Box h="100%">
        <DisplayInfo
          isSelected={pathName == "dashboard"}
          name="Dashboard"
          pathname="dashboard"
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
    ["Settings", AiOutlineSetting],
  ]);
  return (
    <>
      <Box m="20px " display="flex" justifyContent="start" alignItems="center">
        {props.isSelected ? (
          <>
            <Icon
              color="#22c35e"
              w="2rem"
              h="2rem"
              as={iconsMap.get(props.name)}
            />
            <Link to={props.pathname}>
              <Text color="#22c35e" pl="10px">
                {props.name}
              </Text>
            </Link>
          </>
        ) : (
          <>
            <Icon
              color="gray.500"
              w="2rem"
              h="2rem"
              as={iconsMap.get(props.name)}
            />
            <Link to={props.pathname}>
              <Text color="gray.500" pl="10px">
                {props.name}
              </Text>
            </Link>
          </>
        )}
      </Box>
    </>
  );
}

export default SidebarNavigation;
