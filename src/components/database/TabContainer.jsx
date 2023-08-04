"use client";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import StudentTab from "./Tabs/StudentTab";
import TeacherTab from "./Tabs/TeacherTab";

function TabContainer() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab _selected={{ color: "#22c35e" }}>Student</Tab>
          <Tab _selected={{ color: "#22c35e" }}>Teacher</Tab>
          <Tab _selected={{ color: "#22c35e" }}>Staff</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#22c35e"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel p="0" pt="20px">
            <StudentTab />
          </TabPanel>
          <TabPanel p="0" pt="20px">
            <TeacherTab />
          </TabPanel>
          <TabPanel>
            <p>Staff</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default TabContainer;
