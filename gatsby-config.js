const path = require(`path`); // eslint-disable-line

module.exports = {
  siteMetadata: {
    title: `craiglewis.me`,
    description: `Craig Lewis' personal website, computer science student at the University of Waterloo`,
    author: `@craigericlewis`,
    siteUrl: `https://craiglewis.me`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-typescript` },
    { resolve: `gatsby-plugin-styled-components` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-plugin-transition-link` },
    { resolve: `gatsby-plugin-remove-trailing-slashes` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~assets': 'src/assets',
          '~components': 'src/components',
          // "~layouts": "src/layouts",
          '~pages': 'src/pages',
          // "~sections": "src/sections",
          '~theme': 'src/theme',
          '~types': 'src/types',
          // "~utils": "src/utils",
          '~src': 'src',
        },
        extensions: ['ts', 'tsx', 'json'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168732314-1',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `600`, `700`],
          },
          { family: `Roboto` },
        ],
      },
    },
    { resolve: `gatsby-plugin-sitemap` },
  ],
};
