import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        justify="center"
        flexDirection={["column", "column", "column", "row"]}
        h="100vh"
        bg="purple.50"
      >
        <Box w={["100%", "100%", "100%", "30%"]} h={["0%", "0%", "0%", "100%"]}
          borderRight="1px" borderColor="gray.200">
          <Aside />
        </Box>
        <Box w={["100%", "100%", "100%", "70%"]} h="100%" overflow="auto">
          <Main />
        </Box>
      </Flex>
    </ChakraProvider >
  );
}

export default App;
