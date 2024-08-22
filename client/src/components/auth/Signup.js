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
  
  const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    const toast = useToast();
  
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
  
  
    const submitHandler = async () => {
      if(!name || !email || !password || !confirmPassword){
          toast({
              title: "Please fill all the fields",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
          });
          return;
      }
  
      if(password !== confirmPassword){
          toast({
              title: "Passwords do not match",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
          });
          return;
      }
  
      console.log(name, email );
  
      try {
          const config = {
              headers: {
                  "Content-type": "application/json",
              },
          };                                                                   
  
          const  {data } = await axios.post("http://localhost:5000/user/signup", 
              { name, email, password },
              config
          );
  
          toast({
              title: "Signup Successful",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
          });
  
          localStorage.setItem('userInfo', JSON.stringify(data));
  
      } catch (error) {
          toast({
              title: "Error Occurred!",
              description: error.response?.data?.message,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
          });
      }
    };
  
    return (
      <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
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
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm-Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        >
          SignUp
        </Button>
      </VStack>
    );
  };
  
  export default Signup;
  