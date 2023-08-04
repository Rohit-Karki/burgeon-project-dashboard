"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiOutlineSortAscending,
  AiTwotoneFilter,
  AiOutlinePlus,
} from "react-icons/ai";
import React, { useState } from "react";
import AddModal from "./AddModal";

function ContentNavbar() {
  const [buttonState, setButtonState] = useState("sort");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);
  return (
    <>
      <AddModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py="15px"
      >
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            Database
          </Text>
        </Box>
        <ButtonGroup variant="solid" spacing="6">
          <Button
            size="sm"
            px="15px"
            colorScheme="whatsapp"
            rightIcon={<Icon as={AiOutlineSortAscending} />}
          >
            Sort
          </Button>
          <Button
            size="sm"
            px="15px"
            colorScheme="gray"
            rightIcon={<Icon as={AiTwotoneFilter} />}
          >
            Filter
          </Button>
          <Button
            size="sm"
            px="15px"
            ref={btnRef}
            onClick={onOpen}
            leftIcon={<Icon as={AiOutlinePlus} />}
            colorScheme="whatsapp"
          >
            Add
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default ContentNavbar;
