import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { filteredNotes, onClickNote } from "../../redux/notes/notesSlice";
import EditPopup from "./EditPopup";


const NoteBox = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector(filteredNotes);

  const clickNote = (item) => {
    dispatch(onClickNote(item));
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        pt="5"
      >
        {notes.map((item) => (
          <Box
            key={item.id}
            w="250px"
            h="250px"
            m="5"
            p="6"
            bg={item.color}
            borderRadius="16"
            rounded="xl"
            boxShadow="xl"
            overflow="hidden"
            textOverflow="ellipsis"
            onClick={() => clickNote(item)}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            cursor="pointer"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
            }}
          >
            <Text
              color="gray.500"
              textShadow="0 0 1px #4A5568"
              p={1}
              fontFamily="'Dancing Script', cursive;"
              fontWeight="medium"
              fontSize="2xl"
              lineHeight="1.2"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="normal"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 7,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.content}
            </Text>
          </Box>
        ))}
      </Box>
      {isOpen && <EditPopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default NoteBox;
