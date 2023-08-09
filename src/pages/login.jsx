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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation({
    mutationFn: () => {
      // event.preventDefault();
      return loginUserFn({ phoneNo, password });
    },
    onSuccess: (response, variables, context) => {
      localStorage.setItem("data", JSON.stringify(response.data.user));
      localStorage.setItem("auth-token", response.data.accessToken);
      navigate("/dashboard");
    },
    onError: (data) => {
      setError(data.messages[0]);
    },
  });
  const handleLogin = () => {
    mutate();
  };

  return (
    <>
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          boxShadow="xl"
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
              OffGuard
            </Text>
          </Box>
          <Text fontSize="2xl" textAlign="center" fontWeight="extrabold">
            Login to your account
          </Text>
          <Text color="red">{error}</Text>
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
                invalid={error != ""}
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
                  invalid={error != ""}
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
              isLoading={isLoading}
              loadingText="Submitting"
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
