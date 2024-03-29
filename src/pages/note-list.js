import React from "react";
import { graphql } from "gatsby";
import { Box, Link } from "@chakra-ui/react";

const NotesIndex = ({ data }) => {
  const { edges: notes } = data.allMdx;
  return (
    <Box>
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
  query noteIndex {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default NotesIndex;
