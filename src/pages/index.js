import React from "react";
import {
  Box,
  Icon,
  Text,
  Button,
  Center,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SEO from "../components/seo";
import Social from "../../src/components/social";
import { GoPlus } from "react-icons/go";

const IndexPage = () => (
  <>
    <SEO title="Tim Lindgren" />
    <Box
      as="section"
      pb="0"
      minHeight="100vh"
      bgGradient="linear(to-t, brand.800, brand.700)"
    >
      <Center centerContent>
        <Text
          fontSize={{ base: "5xl", lg: "6xl", xl: "6xl" }}
          fontWeight="extrabold"
          textAlign="center"
          color="#fff"
          m="0"
          px={{ base: "8", lg: "0" }}
          pt={{ base: "10", lg: "16" }}
          pb={{ base: "10", lg: "12", xl: "12" }}
        >
          learning <Icon as={GoPlus} color="brand.300" w={12} h={12} />{" "}
          designing <Icon as={GoPlus} color="brand.300" w={12} h={12} />{" "}
          thinking
        </Text>
      </Center>
      <SimpleGrid
        columns={{ lg: "3" }}
        textAlign="center"
        spacing={{ base: "10", md: "12", lg: "8", xl: "10" }}
        m={{ base: "8", lg: "8", xl: "16" }}
      >
        <Box borderRadius="lg" boxShadow="2xl" bgColor="brand.600">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="600"
            textTransform="uppercase"
            mb="2"
            color="brand.100"
            pt="8"
          >
            Learning Design
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb=""
            color="white"
          >
            Crafting formative learning experiences
          </Text>
        </Box>
        <Box borderRadius="lg" boxShadow="2xl" bgColor="brand.600">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="600"
            textTransform="uppercase"
            mb="2"
            color="brand.100"
            pt="8"
          >
            Web Development
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb="6"
            color="white"
          >
            Building interfaces that show users some love
          </Text>
        </Box>
        <Box borderRadius="lg" boxShadow="2xl" bgColor="brand.600">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="600"
            textTransform="uppercase"
            mb="2s"
            color="brand.100"
            pt="8"
          >
            Consulting
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb="6"
            color="white"
          >
            Thinking with people to help their ideas (and them) grow
          </Text>
        </Box>
      </SimpleGrid>
      <Wrap mt="10" justify="center">
        <WrapItem d="none">
          <Button href="/about" colorScheme="brand" as="a">
            About Me{" "}
          </Button>
        </WrapItem>
        <WrapItem>
          <Button href="/about-this-site" colorScheme="brand" as="a" d="none">
            About this Site{" "}
          </Button>
        </WrapItem>
      </Wrap>
      <Wrap width="100%" mt="16" pb="8" justify="center">
        <WrapItem>
          <Social />
        </WrapItem>
      </Wrap>
    </Box>
  </>
);

export default IndexPage;
