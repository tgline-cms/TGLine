import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from 'react-bootstrap'

const PavilionElements = React.memo(({ product }) => (
  <article className="images d-flex flex-column align-items-center justify-content-center">
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <GatsbyImage
        image={getImage(product?.frontmatter?.wall_image)}
        className="mb-3 mb-lg-5 mt-lg-5"
        alt="Przekrój ściany pawilonu"
      />
      <p className="text-center p-3">
        {product?.frontmatter?.wall_image_description}
      </p>
    </Container>
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <GatsbyImage
        image={getImage(product?.frontmatter?.roof_image)}
        className="mb-3 mb-lg-5 mt-lg-5"
        alt="Dach pawilonu"
      />
      <p className="text-center p-3">
        {product?.frontmatter?.roof_image_description}
      </p>
    </Container>
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <GatsbyImage
        image={getImage(product?.frontmatter?.floor_image)}
        className="mb-3 mb-lg-5 mt-lg-5"
        alt="Warstwy podłogi pawilonu"
      />
      <p className="text-center p-3">
        {product?.frontmatter?.floor_image_description}
      </p>
    </Container>
  </article>
))

export default PavilionElements
