module.exports = {
  siteMetadata: {
    title: `Tim Lindgren`,
    description: ``,
    author: `Tim`,
  },
  plugins: [
    //Chakra-UI
    `@chakra-ui/gatsby-plugin`,
    // MDX
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom`, // Important!
        ],
        extensions: [`.mdx`, `.md`],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        gatsbyRemarkPlugins: [
          // Wikilinks
          {
            resolve: "gatsby-remark-double-brackets-link",
            options: {
              stripBrackets: false,
            },
          },
          //images
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false, // Important!
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {},
          },
        ],
      },
    },
    // Link References
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"], // or ['RemarkMarkdown'] (or both)
      },
    },
    `gatsby-plugin-catch-links`,
    //React Helmet
    `gatsby-plugin-react-helmet`,
    // File System
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    // Offline
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        title: `Tim Lindgren`,
        short_name: `Tim Lindgren`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-425810-3",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:300,400,600,700,800"],
        },
      },
    },
    "gatsby-plugin-changelog-context",
  ],
};
