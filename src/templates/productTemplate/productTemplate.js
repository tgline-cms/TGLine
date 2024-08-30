import React from "react"
import { graphql } from "gatsby"
import { Container, ListGroup, Row, Col, Stack, Badge } from "react-bootstrap"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
    <Container className="shadow min-vh-100 mt-4 mb-4 rounded">
      <Breadcrumbs activeSite={`pawilon-${product?.frontmatter?.id}`} />
      <Row>
        <Container className="d-flex flex-wrap align-items-start p-3 shadow-sm">
          <Col sm={2} lg={1} className="d-flex">
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <RightArrow className="arrow-icon me-2" />
            </motion.div>
          </Col>
          <Col sm={8} lg={4} className="d-flex flex-column">
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
          </Col>
          <Col
            sm={12}
            lg={7}
            className="mt-4 justify-self-lg-end ms-lg-auto slider"
          >
            <Slider product={product?.frontmatter?.id} />
          </Col>
          <Col lg={{ offset: 1 }}>
            <article className="specification mt-5 mt-lg-0 pt-lg-5 pb-5">
              <h4 className="m-3 m-lg-0 mb-lg-2">Specyfikacja:</h4>
              <ListGroup variant="flush" className="specification-list ps-4">
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  Wymiary zewnętrzne:{" "}
                  {product?.frontmatter?.external_dimensions}
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  Wymiary wewnętrzne:{" "}
                  {product?.frontmatter?.internal_dimensions}
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  Wysokość wewnętrzna: {product?.frontmatter?.internal_height}
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  Tolerancja wymiarów:{" "}
                  {product?.frontmatter?.dimension_tolerance}
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  Wykończenie: {product?.frontmatter?.decoration}
                </ListGroup.Item>
                <ListGroup.Item className="ps-0 pb-2 pb-lg-3">
                  {product?.frontmatter?.wall_image_description}
                </ListGroup.Item>
              </ListGroup>
            </article>
          </Col>
        </Container>
      </Row>
      <article className="grey-bg">
        <Container className="bg-grey pt-5 pb-5 shadow-sm">
          <Row>
            <Col lg={{ offset: 1 }}>
              <h4 className="m-3 m-lg-0 mb-lg-2">Wyposażenie:</h4>
              <ListGroup variant="flush" className="product-table ps-4">
                {product?.frontmatter?.equipment.map(({ equipment_item }) => (
                  <ListGroup.Item className="ps-0" key={uuidv4()}>
                    {equipment_item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </article>
      <article>
        <Container className="d-flex flex-column align-items-center justify-content-center">
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
      <article className="grey-bg">
        <Container className="mt-5 pb-5 pt-5 shadow-sm">
          <Row>
            <Col lg={{ offset: 1 }}>
              <h4 className="m-3 m-lg-0 mb-lg-2">
                Dodatkowe opcje wyposażenia:
              </h4>
              <ListGroup variant="flush" className="product-table ps-4">
                {product?.frontmatter?.extra_equipment.map(
                  ({ extra_equipment_item }) => (
                    <ListGroup.Item className="ps-0" key={uuidv4()}>
                      {extra_equipment_item}
                    </ListGroup.Item>
                  )
                )}
              </ListGroup>
            </Col>
          </Row>
        </Container>
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
        exterior_color
        dimension_tolerance
        decoration
        delivery
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
