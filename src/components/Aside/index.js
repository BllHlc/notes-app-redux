import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import Form from "../Form";
import Category from "../Category";
import Footer from "../Footer";

const Aside = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100%">
      <Spacer />
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
      <Form />
      <Category />
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Aside;
