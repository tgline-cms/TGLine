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
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 900 
                  placeholder: BLURRED
                )
            }
          }
        }
      }
        pavilionsParameters: allMarkdownRemark(
        filter: { frontmatter: { markdownName: { eq: "pawilon" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              size
              product_image {
                childImageSharp {
                  gatsbyImageData(
                    backgroundColor: "grey"
                    placeholder: BLURRED
                    width: 1200
                    height: 800
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
                }
              }
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

  const currentProduct = data.pavilionsParameters.edges.filter(({node}) => node.frontmatter.id === product)[0]
  const currentProductImage = currentProduct?.node?.frontmatter?.product_image

  return (
    <>
      {images.length >= 2 ? (
        <Carousel fade className="mt-4 mb-4">
          {images.map(image => {
            return (
              <Carousel.Item interval={2000} key={uuidv4()}>
                <GatsbyImage image={image} alt={`Pawilon handlowy ${currentProduct?.node?.frontmatter?.size}`} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      ) : (
        <GatsbyImage image={getImage(currentProductImage)} alt={`Pawilon handlowy ${currentProduct?.node?.frontmatter?.size}`} />
      )}
    </>
  )
}

export default Slider
