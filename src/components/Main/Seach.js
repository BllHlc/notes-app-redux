import React from "react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton, Input, InputGroup, InputLeftElement, Show } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { findNote, changeDrawer } from '../../redux/notes/notesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.notes.findNote);

  return (
    <Box
      display="flex"
      m="0 auto"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bg="white"
      rounded="xl"
      w="25%"
      minW="200px"
    >
      <Show below="lg">
        <IconButton
          aria-label="Search database"
          icon={<HamburgerIcon
            color="red.500"
          />}
          position="absolute" left="5" top="5"
          colorScheme="whiteAlpha"
          boxShadow="lg"
          onClick={() => dispatch(changeDrawer())}
        />
      </Show>
      <Box position="fixed" zIndex="1" bg="white" rounded="xl" boxShadow="md">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="red.500" />}
          />
          <Input
            type="text"
            value={filtered}
            onChange={(e) => dispatch(findNote(e.target.value))}
            placeholder="Note Search"
            border="0"
            focusBorderColor="none"
            _focusVisible={{ outline: "none" }}
            fontWeight="400"
            spellCheck="false"
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Search;
