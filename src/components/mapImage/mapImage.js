import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./mapImage.scss"

function MapImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "map.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className="mapImage"
      image={getImage(data.file)}
      alt="mapa siedziby firmy TGLine. Gliwice, Złota 10"
    />
  )
}

export default MapImage
