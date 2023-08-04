import { Box } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import SidebarNavigation from './SidebarNavigation'

function Sidebar() {
  return (
    <>
    <Box px="" py="2rem">
        <Logo/>
        <SidebarNavigation />
    </Box>
    </>
  )
}

export default Sidebar