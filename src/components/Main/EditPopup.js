import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, deleteNote } from "../../redux/notes/notesSlice";

const EditPopup = ({ isOpen, setIsOpen }) => {
  const item = useSelector(state => state.notes.currentNote);
  const [editNotes, setEditNotes] = useState(item.content);
  const dispatch = useDispatch();
  const toast = useToast();

  const saveSubmit = () => {
    dispatch(editNote(editNotes));
    setIsOpen(!isOpen);
    toast({
      description: "Note saved.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const deleteSubmit = () => {
    dispatch(deleteNote());
    setIsOpen(!isOpen);
    toast({
      title: 'Note deleted',
      duration: 3000,
      status: 'warning',
      isClosable: true,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(!isOpen)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Note Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Textarea
            value={editNotes}
            onChange={(e) => setEditNotes(e.target.value)}
            fontWeight="300" w="100%" h="160px"
            placeholder='Write your note here...'
            resize="none"
            focusBorderColor='none'
            _focusVisible={{ outline: 'none' }}
            spellCheck="false"
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => deleteSubmit()} colorScheme='red' mr={3} fontWeight="300">
            Delete
          </Button>
          <Button onClick={() => saveSubmit()} colorScheme='green' fontWeight="300" isDisabled={item.note !== editNotes && editNotes ? false : true}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPopup;