/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TGLine`,
    description: `Modern pavilions for every need. A company with many years of experience in the manufacture of year-round sandwich panel pavilions.`,
    copyright: "U+00A9 2024 | Beata Maro",
    author: `Beata Maro`,
    image: `/open-graph/og-image.png`,
    siteUrl: `https://my-extraspace.netlify.app`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `jura\:400,500,600,700`
        ],
        display: 'swap'
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-decap-cms`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TGLine - Pawilony Handlowe`,
        short_name: `TGLine`,
        start_url: `/`,
        background_color: `#373634`,
        theme_color: `#e7ecf3`,
        display: `standalone`,
        icon: `${__dirname}/static/icons/tgline_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
