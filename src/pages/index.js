import React from "react";
import {
  Box,
  Text,
  Button,
  Center,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SEO from "../components/seo";
import Social from "../../src/components/social";

const IndexPage = () => (
  <>
    <SEO title="Tim Lindgren" />
    <Box as="section" pt="12" pb="0">
      <Center centerContent>
        <Text
          fontSize="5xl"
          fontWeight="extrabold"
          textAlign="center"
          color="blue.900"
          m="0"
        >
          learning + designing + thinking + living
        </Text>
      </Center>
      <SimpleGrid columns={{ lg: "3" }} textAlign="center" spacing={4} pt="20">
        <Box
          border="1px"
          borderColor="gray.200"
          padding="6"
          borderRadius="lg"
          boxShadow="base"
          bgColor="brand.25"
        >
          <Text
            as="h2"
            fontSize="2xl"
            fontWeight="800"
            textTransform="uppercase"
            mb="4"
            color="blue.900"
          >
            Learning Design
          </Text>
          <Text fontSize="lg">
            Helping educators design meaningful learning experiences
          </Text>
        </Box>
        <Box
          border="1px"
          borderColor="gray.200"
          padding="6"
          borderRadius="lg"
          boxShadow="base"
          bgColor="brand.25"
        >
          <Text
            as="h2"
            fontSize="2xl"
            fontWeight="800"
            textTransform="uppercase"
            mb="4"
            color="blue.900"
          >
            Web Development
          </Text>
          <Text fontSize="lg">
            Building interfaces that show users some love
          </Text>
        </Box>
        <Box
          border="1px"
          borderColor="gray.200"
          padding="6"
          borderRadius="lg"
          boxShadow="base"
          bgColor="brand.25"
        >
          <Text
            as="h2"
            fontSize="2xl"
            fontWeight="800"
            textTransform="uppercase"
            mb="4"
            color="blue.900"
          >
            Consulting
          </Text>
          <Text fontSize="lg" s>
            Thinking with people to help their ideas grow
          </Text>
        </Box>
      </SimpleGrid>
      <Wrap width="100%" mt="24" justify="center">
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
      <Wrap width="100%" mt="6" justify="center">
        <WrapItem>
          <Social />
        </WrapItem>
      </Wrap>
    </Box>
  </>
);

export default IndexPage;
