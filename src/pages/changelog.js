import React from "react";
import { graphql } from "gatsby";
import { Box, Link, Heading } from "@chakra-ui/react";
import SEO from "../components/seo";

const ChangelogIndex = ({ data }) => {
  const { edges: notes } = data.allMdx;
  return (
    <Box>
      <SEO title="Changlog" />
      <Heading as="h1" size="2xl" fontWeight="800" my="10" mb="8">
        Changelog
      </Heading>
      <ul>
        {notes.map(({ node: note }) => (
          <li key={note.id}>
            <Link href={note.fields.slug}>
              <h2>{note.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export const pageQuery = graphql`
  query changelogIndex {
    allMdx(filter: { frontmatter: { type: { eq: "changelog" } } }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default ChangelogIndex;
