const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    });
  }
};

const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const notes_query = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/notes/" } }) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (notes_query.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const pages_query = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (pages_query.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create note pages.
  const notes = notes_query.data.allMdx.edges;
  // you'll call `createPage` for each result
  notes.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/note-template.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        fileAbsolutePath: node.fileAbsolutePath,
      },
    });
  });

  // Create pages.
  const pages = pages_query.data.allMdx.edges;
  // you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/page-template.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
