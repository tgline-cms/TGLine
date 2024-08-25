import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./mapImage.scss"

function MapImage() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { regex: "/contact/contact.md/" }) {
  //       childMarkdownRemark {
  //         frontmatter {
  //           contact_map {
  //             childImageSharp {
  //               gatsbyImageData(width: 1000, height: 400, placeholder: BLURRED)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "map.webp" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  // const mapImage = data?.file?.childMarkdownRemark?.frontmatter?.contact_map
  const mapImage = data?.file


  return (
    <GatsbyImage
      className="mapImage"
      image={getImage(mapImage)}
      alt={`Mapa siedziby firmy TGLINE. ${mapImage}`}
    />
  )
}

export default MapImage
