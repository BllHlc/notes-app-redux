import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="100%"
      mb="20"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="sm" color="gray.500" ml="3">
        Click to edit a note
      </Text>
      <Text fontSize="sm" color="gray.500" ml="3">
        Created by{" "}
        <Link
          href="https://www.linkedin.com/in/bilal-halici/"
          isExternal
        >
          Bilal Halici
        </Link>
      </Text>
      <Text fontSize="sm" color="gray.500" ml="3">
        Code on{" "}
        <Link href="https://github.com/bllhlc" isExternal>
          Github
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;