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
import ProfileTab from "./Tabs/ProfileTab";
import NotificationsTab from "./Tabs/NotificationsTab";
import ChangePasswordTab from "./Tabs/ChangePasswordTab";

function TabContainer() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab _selected={{ color: "#22c35e" }}>Profile</Tab>
          <Tab _selected={{ color: "#22c35e" }}>Change Password</Tab>
          <Tab _selected={{ color: "#22c35e" }}>Notifications</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#22c35e"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel p="0" pt="20px">
            <ProfileTab />
          </TabPanel>
          <TabPanel p="0" pt="20px">
            <ChangePasswordTab />
          </TabPanel>
          <TabPanel>
            <NotificationsTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default TabContainer;
