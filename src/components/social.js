import React from "react";
import { Wrap, WrapItem, Button, Icon } from "@chakra-ui/react";
import {
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Social = () => (
  <Wrap spacing="2">
    <WrapItem>
      <Button
        leftIcon={<Icon as={FiMail} />}
        colorScheme="brand"
        color="brand.100"
        variant="outline"
        href="/contact"
        as="a"
      >
        {" "}
        Email
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://twitter.com/timlindgren"
        as="a"
        colorScheme="brand"
        color="brand.100"
        variant="outline"
        leftIcon={<Icon as={FiTwitter} />}
      >
        Twitter{" "}
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://www.Buttonedin.com/in/timlindgren/"
        as="a"
        colorScheme="brand"
        color="brand.100"
        variant="outline"
        leftIcon={<Icon as={FiLinkedin} />}
      >
        LinkedIn
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://www.instagram.com/timothylindgren/"
        as="a"
        colorScheme="brand"
        color="brand.100"
        variant="outline"
        leftIcon={<Icon as={FiInstagram} />}
      >
        {" "}
        Instagram{" "}
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://github.com/tlindgren"
        as="a"
        colorScheme="brand"
        color="brand.100"
        variant="outline"
        leftIcon={<Icon as={FiGithub} />}
      >
        Github
      </Button>
    </WrapItem>
  </Wrap>
);

export default Social;
