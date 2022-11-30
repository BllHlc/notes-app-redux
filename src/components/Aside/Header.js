import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        textShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        Notes-App
      </Text>
    </Flex>
  );
};

export default Header;