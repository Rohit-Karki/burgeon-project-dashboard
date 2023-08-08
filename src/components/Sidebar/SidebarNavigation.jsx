"use client";
import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function SidebarNavigation() {
  const location = useLocation();
  let pathName = location.pathname;
  pathName = pathName.slice(1, pathName.length);
  const color = "#22c35e";
  return (
    <>
      <Box h="100%">
        <DisplayInfo
          isSelected={pathName == "" || pathName == "dashboard"}
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
    ["Dashboard", MdSpaceDashboard],
    ["Settings", AiOutlineSetting],
  ]);
  return (
    <>
      <Box my="20px">
        <Box display="flex" justifyContent="start" alignItems="center">
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
      </Box>
    </>
  );
}

export default SidebarNavigation;
