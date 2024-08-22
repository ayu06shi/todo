import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from 'react-router-dom';
  
  const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const [user, setUser] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => setShow(!show);
  
    const toast = useToast();
    const nav = useNavigate();
  
    const submitHandler = async () => {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please fill all the fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
  
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "http://localhost:5000/user/login",
          { email, password },
          config
        );
  
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setUser(data);
  
        localStorage.setItem("userInfo", JSON.stringify(data));
  
        console.log(email);
  
        setLoading(false);
        nav('/tasks')
        
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: error.response?.data?.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };
    return (
      <div>
        <VStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={password}
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="green"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            isLoading={loading}
          >
            Login
          </Button>
        </VStack>
      </div>
    );
  };
  
  export default Login;
  