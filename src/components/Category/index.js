import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const Category = () => {
  return (
    <Flex mt="4" flexDirection="column" alignItems="center" w="100%">
      <Text
        fontSize="larger"
        fontWeight="bold"
        mb="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        textShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        Category
      </Text>
      <Box bg="white" rounded="xl" w="80%" h="40px" boxShadow="lg" >
        <Select
          fontWeight="medium"
          color="gray.500"
          placeholder="All Notes"
          border="none"
          _focusVisible={{ border: "none" }}
        // value={activeCategory}
        // onChange={(e) => dispatch(category(e.target.value))}
        >
          <option value="green.300">Green Notes</option>
          <option value="blue.300">Blue Notes</option>
          <option value="orange.300">Orange Notes</option>
          <option value="purple.300">Purple Notes</option>
          <option value="red.300">Red Notes</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default Category;
