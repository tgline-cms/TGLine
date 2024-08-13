/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site, openGraphDefaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        openGraphDefaultImage: file(
          relativePath: { eq: "open-graph/og-image.png" }
        ) {
          publicURL
        }
      }
    `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImageUrl = `${site.siteMetadata.siteUrl}${openGraphDefaultImage.publicURL}`

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content="TGLine - Commercial Pavilions" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo


// graphql`
    //   query {
    //     site {
    //       siteMetadata {
    //         title
    //         description
    //         author
    //       }
    //     }
    //     openGraphDefaultImage: file(
    //       relativePath: { eq: "open-graph/og-image.png" }
    //     ) {
    //       childImageSharp {
    //         gatsbyImageData(layout: FIXED, height: 580, width: 1200)
    //       }
    //     }
    //   }
    // `
