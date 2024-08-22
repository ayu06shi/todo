import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Home = () => {

  return (
    <Container maxW="md" bg="white" centerContent mt={5}>
      <Box
        d="flex"
        justifyContent="center"
        p={1}
        bg="white"
        w="100%"
        maxW="md"
        // m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <div className="flex">
         <p className="m-auto text-2xl bg-green-50 p-2 px-3 rounded-t-2xl">Task Manager</p>
         <img />
        </div>
      </Box>
      <div className="container w-full bg-white rounded-md p-2">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em" className="justify-evenly">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      </Container>
  );
};

export default Home;
