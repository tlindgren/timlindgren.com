import React from "react";
import { Flex, List, ListItem, Link } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

const HorizontalMenu = (props) => {
  return (
    <Flex as="nav" align="center" d={{ base: "none", lg: "flex" }}>
      <List display="flex" alignItems="center">
        <ListItem align="center" px="3">
          <Link
            textTransform="uppercase"
            fontWeight="600"
            color="white"
            fontSize="lg"
            href="/about"
          >
            About
          </Link>
        </ListItem>
        <ListItem align="center" px="3">
          <Link
            textTransform="uppercase"
            fontWeight="600"
            color="white"
            fontSize="lg"
            href="/notes"
          >
            Notes
          </Link>
        </ListItem>
        <ListItem align="center" px="3">
          <Link
            textTransform="uppercase"
            fontWeight="600"
            color="white"
            fontSize="lg"
            href="/portfolio"
          >
            Portfolio
          </Link>
        </ListItem>
        <ListItem align="center" px="3">
          <Link
            textTransform="uppercase"
            fontWeight="600"
            color="white"
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
  );
};

export default HorizontalMenu;
