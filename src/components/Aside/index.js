import React, { useEffect } from "react";
import {
  Flex,
  Spacer,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Form from "./Form";
import Category from "./Category";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { changeDrawer } from "../../redux/notes/notesSlice";

const Aside = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawer = useSelector((state) => state.notes.drawer);

  useEffect(() => {
    if (drawer) {
      onOpen();
    } else {
      onClose();
      dispatch(changeDrawer());
    }
  }, [drawer, onOpen, onClose, dispatch]);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
    >
      <Hide below="lg">
        <Spacer />
        <Header />
        <Form />
        <Category />
        <Spacer />
        <Footer />
      </Hide>
      <Show below="lg">
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
            <DrawerBody
              bg="purple.50"
              display="flex"
              flexDirection="column"
              alignItems="center"
              p="0"
            >
              <Header />
              <Form />
              <Category />
              <Spacer />
              <Footer />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};

export default Aside;
