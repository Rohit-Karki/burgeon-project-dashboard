import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MainContent from "../components/database/MainContent";
import Details from "../components/Details";


export default function Database() {
    return (
        <>
            <Flex ml="20vw">
                <Box w="56vw" flex="5" borderRight="1px" borderRightColor="gray">
                    <MainContent />
                </Box>
                <Box w="24vw">
                    <Details />
                </Box>
            </Flex>
        </>
    );
}

