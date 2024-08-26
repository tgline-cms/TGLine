import * as React from "react"
import { Carousel } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./slider.scss"

const Slider = ({ product }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/^pawilon-/" } }) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges
    .filter(
      ({ node }) =>
        node.relativeDirectory === `pawilon-${product?.toLowerCase()}`
    )
    .map(edge => getImage(edge?.node?.childImageSharp.gatsbyImageData))

  return (
    <>
      {images && (
        <Carousel fade>
          {images.map(image => {
            return (
              <Carousel.Item interval={2000} key={uuidv4()}>
                <GatsbyImage image={image} alt={product} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      )}
    </>
  )
}

export default Slider
