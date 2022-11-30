import { useState } from "react";
import { Button, Flex, Icon, IconButton, Textarea, useToast } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

const Form = () => {
  const toast = useToast();
  const [activeColor, setActiveColor] = useState("green.200");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const buttonColors = [
    "pink.200",
    "purple.200",
    "yellow.200",
    "blue.200",
    "green.200",
  ];

  const handleAddNote = () => {
    dispatch(addNote({ content, color: activeColor }));
    setContent("");
    toast({
      title: "Note added.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  function butonBgColor(color) {
    let bg = Number(color.split(".")[1]) + 300;
    return color.split(".")[0] + "." + bg;
  }



  return (
    <Flex
      bg="white"
      p="3"
      rounded="xl"
      w="80%"
      boxShadow="lg"
      flexDirection="column"
    >
      <Textarea
        placeholder="Add a note"
        fontWeight="medium"
        w="100%"
        h="160px"
        bg="white"
        resize="none"
        border="0"
        spellCheck="false"
        _focusVisible={{ border: "0" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Flex justify="space-evenly">
        {buttonColors.map((color) => (
          <IconButton
            key={color}
            aria-label="Add a note"
            icon={color === activeColor ? <CheckIcon /> : <Icon as={CheckIcon} opacity="0" />}
            size="sm"
            bg={butonBgColor(color)}
            variant="ghost"
            mx="1"
            color="white"
            borderRadius="full"
            _hover={{ bg: color }}
            _active={{ bg: color }}
            onClick={() => setActiveColor(color)}
          />
        ))}
      </Flex>
      <Button
        bg="#FF0080"
        color="#fff"
        w="100%"
        mt="4"
        fontWeight="bold"
        _hover={{ bg: "#7928CA" }}
        _active={{ bg: "#7928CA" }}
        transition="all 0.4s ease-in-out"
        onClick={handleAddNote}
        disabled={content.length === 0}
      >
        ADD NOTE
      </Button>
    </Flex>
  );
};

export default Form;
