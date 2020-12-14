import React from 'react'
import { Button, useDisclosure,Flex, List, ListItem, Link } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"
import ThemeToggle from './theme-toggle'


  export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen} d={{ lg: "none" }}>
          Open
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
                  <ListItem align="center"  px="3" >
                      <Link textTransform="uppercase"  fontSize="xl" href="/about">About</Link>
                  </ListItem>
                  <ListItem align="center"  px="3" >
                      <Link textTransform="uppercase"  fontSize="xl" href="/notes">Notes</Link>
                  </ListItem>
                  <ListItem align="center"  px="3" >
                      <Link textTransform="uppercase"  fontSize="xl" href="/portfolio">Portfolio</Link>
                  </ListItem>
                  <ListItem align="center"  px="3" >
                      <Link textTransform="uppercase"  fontSize="xl" href="/changelog">Changelog</Link>
                  </ListItem>
                  <ListItem align="center">
                      <ThemeToggle />
                  </ListItem>
                </List>
              </Flex>
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }