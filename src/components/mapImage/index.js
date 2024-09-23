import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./mapImage.scss"

function MapImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/contact/contact.md/" }) {
        childMarkdownRemark {
          frontmatter {
            contact_map {
              childImageSharp {
                gatsbyImageData(width: 1000, height: 400, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  const mapImage = data?.file?.childMarkdownRemark?.frontmatter?.contact_map
  const image = mapImage?.childImageSharp ? getImage(mapImage) : null

  return (
    <>
      {image && (
        <GatsbyImage
          className="mapImage"
          image={image}
          alt="Mapa siedziby firmy TGLINE"
        />
      )}
    </>
  )
}

export default MapImage
