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
    description: `We build bespoke pavilions. We are a company with many years of experience in the manufacture of year-round sandwich panel pavilions. Do you have a business idea but don't know where to start? - Nothing could be easier - contact us and we will provide you with a personalised offer.`,
    author: `Beata Maro`,
    image: `/open-graph/og-image.png`,
    siteUrl: `https://www.myextraspaceuk.netlify.app`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-decap-cms`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-svgr-loader`,
      options: {
        rule: {
          include: `${__dirname}/static/icons`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TGLine - Commercial Pavilions`,
        short_name: `TGLine`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/icons/tgline_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
