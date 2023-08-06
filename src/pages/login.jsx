import React, { useState } from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useMutation } from "react-query";
import { loginUserFn } from "../queriesAndmutations/login/index";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => {
      // event.preventDefault();
      return loginUserFn({ userName, password });
    },
    onSuccess: (response, variables, context) => {
      localStorage.setItem("data", JSON.stringify(response.data.user));
      localStorage.setItem("auth-token", response.data.accessToken);
      navigate("/dashboard");
    },
  });
  const handleLogin = () => {
    mutation.mutate();
    if (mutation?.data) {
      console.log(mutation.data);
    }
  };

  return (
    <>
      <Box
        h="100vh"
        bgGradient="linear(to-r, #fc466b, #3f5efb)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg="white"
          borderRadius="2%"
          gap="20px"
          p="40px"
          w="30%"
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text p="8px" fontSize="2xl" fontWeight="bold">
              All Attendance
            </Text>
          </Box>
          <Text fontSize="2xl" textAlign="center" fontWeight="extrabold">
            Login to your account
          </Text>
          <Box
            w="100%"
            gap="20px"
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="flex-start"
          >
            <Box w="100%" gap="10px" display="flex" flexDirection="column">
              <Text fontWeight="bold">Phone Number</Text>
              <Input
                value={phoneNo}
                onChange={(event) => {
                  setPhoneNo(event.target.value);
                }}
                bg="gray.200"
                w="100%"
                placeholder="Phone Number"
                size="md"
              />
            </Box>
            <Box w="100%" gap="10px" display="flex" flexDirection="column">
              <Text fontWeight="bold">Password</Text>
              <InputGroup size="md">
                <Input
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  pr="4.5rem"
                  bg="gray.200"
                  w="100%"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button variant="unstyled" size="sm" onClick={handleClick}>
                    {showPassword ? (
                      <Icon as={AiFillEyeInvisible} />
                    ) : (
                      <Icon as={AiFillEye} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
          <Box w="100%">
            <Button
              w="100%"
              colorScheme="purple"
              size="md"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
