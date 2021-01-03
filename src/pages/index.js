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
    <Box as="section" pt="12" pb="0">
      <Center centerContent>
        <Text
          fontSize={{ base: "5xl", lg: "5xl", xl: "6xl" }}
          fontWeight="extrabold"
          textAlign="center"
          color="blue.600"
          m="0"
        >
          learning <Icon as={GoPlus} color="brand.600" w={12} h={12} />{" "}
          designing <Icon as={GoPlus} color="brand.600" w={12} h={12} />{" "}
          thinking <Icon as={GoPlus} color="brand.600" w={12} h={12} /> living
        </Text>
      </Center>
      <SimpleGrid
        columns={{ lg: "3" }}
        textAlign="center"
        spacing={{ base: "10", md: "12", lg: "8", xl: "10" }}
        pt="20"
        m={{ base: "8", lg: "8", xl: "0" }}
      >
        <Box borderRadius="lg" boxShadow="md" bgColor="brand.25">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="400"
            textTransform="uppercase"
            mb="4"
            color="white"
            bgColor="brand.600"
          >
            Learning Design
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb="6"
            pt="2"
          >
            Helping educators design meaningful learning experiences
          </Text>
        </Box>
        <Box borderRadius="lg" boxShadow="md" bgColor="brand.25">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="400"
            textTransform="uppercase"
            mb="4"
            color="white"
            bgColor="brand.600"
          >
            Web Development
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb="6"
            pt="2"
          >
            Building interfaces that show users some love
          </Text>
        </Box>
        <Box borderRadius="lg" boxShadow="md" bgColor="brand.25">
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "2xl", xl: "3xl" }}
            fontWeight="400"
            textTransform="uppercase"
            mb="4"
            color="white"
            bgColor="brand.600"
          >
            Consulting
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "xl", xl: "2xl" }}
            px="6"
            pb="6"
            pt="2"
          >
            Thinking with people to help their ideas grow
          </Text>
        </Box>
      </SimpleGrid>
      <Wrap width="100%" mt="10" justify="center">
        <WrapItem>
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
      <Wrap width="100%" mt="24" mb="8" justify="center">
        <WrapItem>
          <Social />
        </WrapItem>
      </Wrap>
    </Box>
  </>
);

export default IndexPage;
