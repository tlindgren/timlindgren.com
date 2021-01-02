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
        colorScheme="gray"
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
        colorScheme="gray"
        leftIcon={<Icon as={FiTwitter} />}
      >
        Twitter{" "}
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://www.Buttonedin.com/in/timlindgren/"
        as="a"
        colorScheme="gray"
        leftIcon={<Icon as={FiLinkedin} />}
      >
        LinkedIn
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        href="https://www.instagram.com/timothylindgren/"
        as="a"
        colorScheme="gray"
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
        colorScheme="gray"
        leftIcon={<Icon as={FiGithub} />}
      >
        Github
      </Button>
    </WrapItem>
  </Wrap>
);

export default Social;
