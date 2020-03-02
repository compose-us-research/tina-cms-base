const path = require("path")
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), "../..")

module.exports = {
  siteMetadata: {
    title: `Tina CMS Base`,
    description: `Base for Tina CMS project`,
    author: `@compose_us`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-tinacms`,
      options: {
        plugins: [
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToRepo: REPO_ABSOLUTE_PATH,
              pathToContent: "compose-us-research/tina-cms-base",
              defaultCommitMessage: "Edited with TinaCMS",
              defaultCommitName: "TinaCMS",
              defaultCommitEmail: "git@tinacms.org",
              pushOnCommit: false,
            },
          },
          `gatsby-tinacms-remark`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
