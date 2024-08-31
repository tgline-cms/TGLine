import * as React from "react"
import { Carousel, Modal, Container } from "react-bootstrap"
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
              gatsbyImageData(placeholder: BLURRED)
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
                    layout: CONSTRAINED
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

  const currentProduct = data?.pavilionsParameters?.edges?.find(
    ({ node }) => node.frontmatter.id === product
  )

  const currentProductImage = currentProduct
    ? getImage(currentProduct.node.frontmatter.product_image)
    : null

  const [showModal, setShowModal] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [carouselKey, setCarouselKey] = React.useState(uuidv4())

  const handleShowModal = image => {
    setSelectedImage(image)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedImage(null)
    setCarouselKey(uuidv4())
  }

  return (
    <article>
      {images.length >= 2 && (
        <Carousel
          fade
          pause={false}
          className="mt-4 mt-lg-0"
          key={carouselKey}
        >
          {images.map(image => {
            return (
              <Carousel.Item
                interval={2000}
                onClick={() => handleShowModal(image)}
                key={uuidv4()}
              >
                <GatsbyImage
                  image={image}
                  alt={`Pawilon handlowy ${currentProduct?.node?.frontmatter?.size}`}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      )}

      {images.length === 1 && (
        <Container
          className="img-container"
          onClick={() => handleShowModal(getImage(currentProductImage))}
        >
          <GatsbyImage
            image={images[0]}
            alt={`Pawilon handlowy ${currentProduct?.node?.frontmatter?.size}`}
          />
        </Container>
      )}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <GatsbyImage
              image={selectedImage}
              alt="Powiększone zdjęcie pawilonu handlowego"
            />
          )}
        </Modal.Body>
      </Modal>
    </article>
  )
}

export default Slider
