"use client";
import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import ContentNavbar from '../ContentNavbar'
import Search from '../common/Search';
import TabContainer from './TabContainer';

function MainContent() {
  return (
    <>
      <Box px="20px">
        <Search />
        <ContentNavbar />
        <TabContainer />
      </Box>
    </>
  )
}

export default MainContent