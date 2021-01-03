import React from "react";
import PropTypes from "prop-types";
import Logo from "../../content/images/tl-logo-white.png";
import {
  Container,
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  Image,
} from "@chakra-ui/react";
import DrawerMenu from "./drawer-menu";
import HorizontalMenu from "./horizontal-menu";

const Header = ({ siteTitle }) => (
  <Box as="header" background="brand.700" marginBottom="1.45rem">
    <Container maxW="lg" py="3">
      <Flex align="center">
        <Image src={Logo} alt="" boxSize="50px" mr="3" />
        <Heading as="h1" margin="0">
          <Link
            href="/"
            color="white"
            textTransform="uppercase"
            fontWeight="600"
            _hover={{ textDecor: "none" }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <Spacer />
        <HorizontalMenu />
        <DrawerMenu />
      </Flex>
    </Container>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
