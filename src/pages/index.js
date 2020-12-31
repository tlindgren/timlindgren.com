import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Tim Lindgren" />
    <Box as="section" pt="12" pb="0">
      <Container maxW="xl" centerContent>
        <Text fontSize="5xl" fontWeight="extrabold" color="blue" m="0">
          learning + designing + thinking + living{" "}
        </Text>
      </Container>
    </Box>
  </>
);

export default IndexPage;
