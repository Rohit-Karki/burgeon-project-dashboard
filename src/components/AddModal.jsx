import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Input,
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";


const AddModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent padding="2rem">
        <ModalHeader>Student Details</ModalHeader>
        <Box display="flex" flexDirection="column">
          <Box display="flex" rowGap="3rem" columnGap="20px">
            <Box width="50%">
              <Text fontWeight="bold">First Name</Text>
              <Input
                bg="gray.200"
                w="100%"
                placeholder="First Name"
                size="sm"
              />
            </Box>
            <Box width="50%">
              <Text fontWeight="bold">Last Name</Text>
              <Input bg="gray.200" w="100%" placeholder="Last Name" size="sm" />
            </Box>
          </Box>
          <Box display="flex" columnGap="20px">
            <Box width="50%">
              <Text fontWeight="bold">Email</Text>
              <Input bg="gray.200" w="100%" placeholder="Email" size="sm" />
            </Box>
            <Box width="50%">
              <Text fontWeight="bold">Phone</Text>
              <Input bg="gray.200" w="100%" placeholder="Phone" size="sm" />
            </Box>
          </Box>
          {/* Gender and age */}
          <Box display="flex" columnGap="20px">
            <Box width="50%">
              <Text fontWeight="bold">Gender</Text>
              <Select placeholder="Select Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </Box>
            <Box width="50%">
              <Text fontWeight="bold">Age</Text>
              <Input bg="gray.200" w="100%" placeholder="Age" size="sm" />
            </Box>
          </Box>
          <Box display="flex" columnGap="20px">
            <Box width="50%">
              <Text fontWeight="bold">Class</Text>
              <NumberInput defaultValue={15} min={16} max={23}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box width="50%">
              <Text fontWeight="bold">Department</Text>
              <Select placeholder="Select Department">
                <option value="docse">DOCSE</option>
                <option value="dome">DOME</option>
              </Select>
            </Box>
          </Box>
        </Box>
        <ModalCloseButton />
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Save
          </Button>
          <Button variant="blue">Save to Draft</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
