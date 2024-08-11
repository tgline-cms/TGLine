import * as React from "react"
import { Carousel } from "react-bootstrap"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./slider.scss"

const Slider = ({ product }) => {
  // Query all files and product galleries
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              product_gallery {
                image
              }
            }
          }
        }
      }
    }
  `)

  // Find the pavilion with the matching product ID
  const pavilion = data.allMarkdownRemark.edges.find(
    edge => edge.node.frontmatter.id === product
  )

  if (!pavilion) {
    return <p>No gallery found for this product.</p>
  }

  // Extract the product gallery path
  const galleryPath = pavilion.node.frontmatter.product_gallery
  const pavilionName = galleryPath[0].image.split("/")[2]

  // const images = data.allFile.edges.filter(edge =>
  //   edge.node.base.startsWith(pavilionName)
  // )
  const images = data.allFile.edges
  console.log(images)
  return (
    <Carousel>
      {/* {images.map(({ node }) => {
        const image = getImage(node.childImageSharp.gatsbyImageData)
        return (
          <Carousel.Item interval={2000} key={node.id}>
           { image && (<GatsbyImage image={image} alt={`${node.base}`} />)}
            <Carousel.Caption>
              <h3>Label for this slide</h3>
              <p>Sample Text for this Image</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })} */}
    </Carousel>
  )
}

export default Slider
