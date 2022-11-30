import { Flex } from '@chakra-ui/react';
import React from 'react';
import Search from './Seach';
import NoteBox from './NoteBox';

const Main = () => {
  return (
    <Flex p="10" flexDirection="column">
      <Search />
      <NoteBox />
    </Flex>
  );
};

export default Main;