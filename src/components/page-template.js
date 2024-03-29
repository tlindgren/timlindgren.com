import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Link,
  Heading,
  Box,
  Button,
  SimpleGrid,
  Container,
  Text,
  Header,
} from "@chakra-ui/react";
import SEO from "../components/seo";

const shortcodes = { Link, Heading, Box, Button, SimpleGrid, Text, Header }; // Provide common components here

export default function noteTemplate({ data }) {
  const { mdx } = data;

  return (
    <Container maxW="4xl">
      <article class="mdx">
        <SEO title={mdx.frontmatter.title} />
        <Heading as="h1" size="2xl" fontWeight="800" my="10" mb="8">
          {mdx.frontmatter.title}
        </Heading>

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </Container>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
      inboundReferences {
        ... on Mdx {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`;
