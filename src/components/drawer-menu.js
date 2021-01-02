import React from "react";
import {
  Button,
  useDisclosure,
  Flex,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
        d={{ lg: "none" }}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Site Menu</DrawerHeader>

            <DrawerBody>
              <Flex as="nav">
                <List display="flex" flexDirection="column">
                  <ListItem align="center" px="3">
                    <Link
                      textTransform="uppercase"
                      fontWeight="600"
                      fontSize="lg"
                      href="/about"
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem align="center" px="3" d="none">
                    <Link
                      textTransform="uppercase"
                      fontWeight="600"
                      fontSize="lg"
                      href="/notes"
                    >
                      Notes
                    </Link>
                  </ListItem>
                  <ListItem align="center" px="3" d="none">
                    <Link
                      textTransform="uppercase"
                      fontWeight="600"
                      fontSize="lg"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </ListItem>
                  <ListItem align="center" px="3" d="none">
                    <Link
                      textTransform="uppercase"
                      fontWeight="600"
                      fontSize="lg"
                      href="/changelog"
                    >
                      Changelog
                    </Link>
                  </ListItem>
                  <ListItem align="center">
                    <ThemeToggle />
                  </ListItem>
                </List>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
