import React from "react";
import { Button, Flex, Icon, IconButton, Textarea } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Form = () => {
  const buttonColors = [
    "pink.500",
    "purple.600",
    "yellow.500",
    "blue.600",
    "green.600",
  ];

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
      />
      <Flex justify="space-evenly">
        {buttonColors.map((color) => (
          <IconButton
            key={color}
            aria-label="Add a note"
            icon={<Icon as={CheckIcon} />}
            size="sm"
            bg={color}
            variant="ghost"
            mx="1"
            color="white"
            borderRadius="full"
            _hover={{ bg: color }}
            _active={{ bg: color }}
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
      >
        ADD NOTE
      </Button>
    </Flex>
  );
};

export default Form;
