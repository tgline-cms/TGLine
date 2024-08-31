import React from "react"
import { graphql } from "gatsby"
import { Container, Stack, Badge, ListGroup } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import { motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Slider from "../../components/slider"
import Seo from "../../components/seo"

import "./productTemplate.scss"

const ProductTemplate = ({ data }) => {
  const product = data?.markdownRemark

  if (!product) {
    return <p>Produkt nie został znaleziony.</p>
  }

  return (
    <Container className="shadow min-vh-100 mt-4 mb-4 rounded product-layout">
      <div className="breadcrumbs-wrapper">
        <Breadcrumbs activeSite={`pawilon-${product?.frontmatter?.id}`} />
      </div>
      <div className="header-arrow-wrapper p-3 shadow-sm">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <RightArrow className="arrow-icon me-2" />
        </motion.div>
        <motion.header
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="d-flex flex-column mt-4"
        >
          <h3>Pawilon {product?.frontmatter?.size}</h3>
          <Stack>
            <h4>{product?.frontmatter?.price}</h4>
            <span>{product?.frontmatter?.price_description}</span>
            <h5 className="mt-3 mb-3">
              <Badge bg="secondary">
                {product?.frontmatter?.ref_description}{" "}
                {product?.frontmatter?.id}
              </Badge>
            </h5>
          </Stack>
        </motion.header>
      </div>
      <div className="slider-wrapper">
        <Slider product={product?.frontmatter?.id} />
      </div>
      <article className="specification p-2 mt-3 mt-lg-2 p-lg-5">
        <h4 className="m-3 m-lg-0 mb-lg-2">Specyfikacja:</h4>
        <ListGroup variant="flush" className="specification-list ps-4">
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            Wymiary zewnętrzne: {product?.frontmatter?.external_dimensions}
          </ListGroup.Item>
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            Wymiary wewnętrzne: {product?.frontmatter?.internal_dimensions}
          </ListGroup.Item>
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            Wysokość wewnętrzna: {product?.frontmatter?.internal_height}
          </ListGroup.Item>
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            Tolerancja wymiarów: {product?.frontmatter?.dimension_tolerance}
          </ListGroup.Item>
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            Wykończenie: {product?.frontmatter?.decoration}
          </ListGroup.Item>
          <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
            {product?.frontmatter?.wall_image_description}
          </ListGroup.Item>
        </ListGroup>
      </article>

      <article className="equipment grey-bg p-2 mt-3 mt-lg-2 p-lg-5 shadow-sm" rounded>
        <h4 className="m-3 m-lg-0 mb-lg-2">Wyposażenie:</h4>

        <ListGroup variant="flush" className="product-table ps-4">
          {product?.frontmatter?.equipment.map(({ equipment_item }) => (
            <ListGroup.Item className="ps-0" key={uuidv4()}>
              {equipment_item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </article>
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
      <article className="additional-equipment grey-bg p-2 mt-3 mb-3 mt-lg-2 p-lg-5 shadow-sm rounded">
        <h4 className="m-3 m-lg-0 mb-lg-2">Dodatkowe opcje wyposażenia:</h4>
        <ListGroup variant="flush" className="product-table ps-4">
          {product?.frontmatter?.extra_equipment.map(
            ({ extra_equipment_item }) => (
              <ListGroup.Item className="ps-0" key={uuidv4()}>
                {extra_equipment_item}
              </ListGroup.Item>
            )
          )}
        </ListGroup>{" "}
      </article>
    </Container>
  )
}

export const Head = () => <Seo title="Szczegóły produktu" />

export const query = graphql`
  query ($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
        ref_description
        external_dimensions
        internal_dimensions
        internal_height
        decoration
        size
        price
        price_description
        equipment {
          equipment_item
        }
        extra_equipment {
          extra_equipment_item
        }
        wall_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 350
              breakpoints: [576, 768, 992, 1200]
              formats: [AUTO, WEBP]
            )
          }
        }
        wall_image_description
        roof_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 350
              breakpoints: [576, 768, 992, 1200]
              formats: [AUTO, WEBP]
            )
          }
        }
        roof_image_description
        floor_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
              breakpoints: [576, 768, 992, 1200]
              formats: [AUTO, WEBP]
            )
          }
        }
        floor_image_description
      }
    }
  }
`

export default ProductTemplate
