import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, Heading, Box, Image, Button } from "@chakra-ui/react";
import SEO from "../components/seo";

const shortcodes = { Link, Heading, Box, Image, Button }; // Provide common components here

export default function noteTemplate({ data }) {
  const { mdx } = data;

  return (
    <article class="mdx">
      <SEO title={mdx.frontmatter.title} />
      <Heading as="h1" size="2xl" my="8">
        {mdx.frontmatter.title}
      </Heading>

      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Box>
        {mdx.inboundReferences.length > 0 ? <p>Referenced in:</p> : ""}
        <ul>
          {mdx.inboundReferences.map((ref) => (
            <li>
              <Link href={`/${ref.slug}`}>{ref.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Box>
    </article>
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
