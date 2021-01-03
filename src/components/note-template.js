import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Link,
  Heading,
  Box,
  Button,
  Icon,
  Text,
  Container,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import SEO from "../components/seo";
import moment from "moment";

const shortcodes = { Link, Heading, Box, Button, Icon, Text, SimpleGrid }; // Provide common components here

export default function noteTemplate({ data, pageContext }) {
  const { mdx } = data;

  return (
    <Container maxW="4xl">
      <Box as="article">
        <SEO title={mdx.frontmatter.title} />
        <Heading as="h1" size="2xl" fontWeight="800" my="10" mb="8">
          {mdx.frontmatter.title}
        </Heading>
        <section class="mdx">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </section>
        <Box my="8">
          <footer>
            <Box>
              {mdx.inboundReferences.length > 0 ? (
                <Heading as="h2" size="m">
                  Referenced In
                </Heading>
              ) : (
                ""
              )}
              <ul>
                {mdx.inboundReferences.map((ref) => (
                  <li>
                    <Link href={`/${ref.slug}`}>{ref.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </Box>
            <Accordion allowToggle mt="5">
              <AccordionItem border="none" p="0">
                <AccordionButton as="h2" size="xl" p="0">
                  <Heading as="h2" size="s" fontWeight="normal">
                    Revision History
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} px="0">
                  <UnorderedList mb="3">
                    {pageContext.changelog.map(
                      ({ hash, date, message, body }) => (
                        <ListItem key={hash}>
                          {moment(date).format("ddd Do MMM, YYYY")}: {message}{" "}
                          {body}
                        </ListItem>
                      )
                    )}
                  </UnorderedList>
                  <Link
                    href={`https://github.com/tlindgren/timlindgren.com/blob/main/content/notes/${mdx.slug}.mdx`}
                  >
                    View in Github
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </footer>
        </Box>
      </Box>
    </Container>
  );
}

export const query = graphql`
  query NoteQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
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
