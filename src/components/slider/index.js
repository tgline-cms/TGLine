import * as React from "react"
import { Carousel } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
              exterior_color
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
  const gallery = pavilion.node.frontmatter.product_gallery
  gallery.map((img) => console.log(img.image))
  // const pavilionName = galleryPath[0].image.split("/")[2]

  // const images = data.allFile.edges.filter(edge =>
  //   edge.node.base.startsWith(pavilionName)
  // )
 
  return (
    <Carousel>
      {gallery.map(({ image }) => {
        // const img = getImage(image)
        return (
          <Carousel.Item interval={2000} key={uuidv4()}>
           {/* { image && (<GatsbyImage image={img} alt={`${pavilion.node.frontmatter.exterior_color}} pavilion`} />)} */}
           <img src="/images/pavilion-m02/polka.webp" alt={`${pavilion.node.frontmatter.exterior_color} pavilion`} />

            <Carousel.Caption>
              <h3>Label for this slide</h3>
              <p>Sample Text for this Image</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Slider
