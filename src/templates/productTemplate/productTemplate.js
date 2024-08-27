import React from "react"
import { graphql } from "gatsby"
import { Container, ListGroup, Row, Col, Stack } from "react-bootstrap"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
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
    <Container className="shadow min-vh-100 mt-4 mb-4">
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
                <h4> {product?.frontmatter?.price}</h4>
                <span>zawiera koszt dostawy</span>
                <h5 className="mt-3 mb-3">
                  Nr ref. {product?.frontmatter?.id}
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
              <ListGroup variant="flush" className="specification-list ps-5">
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
                  Ściany z płyt warstwowych EPS z rdzeniem polistyrenowym o
                  grubości 10 cm – współczynnik przenikania ciepła dla
                  polistyrenu wynosi 0,38 W/m2K.
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
              <ListGroup variant="flush" className="product-table ps-5">
                <ListGroup.Item className="ps-0">
                  Instalacja elektryczna: AC
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  oświetlenie LED
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  skrzynka bezpieczników
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">2 gniazdka</ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  instalacja elektryczna
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  1x Aluminiowe drzwi jednoskrzydłowe 108 x 110 cm
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  2x Okna z dwiema warstwami szkła: 100 x 200 cm
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Konstrukcja stalowa – wykonana z profilu stalowego 50x50x4 mm,
                  w tym haki transportowe
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Transport i rozładunek na terenie Polski wliczone w cenę
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </article>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.wall_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
          alt="Przekrój ściany pawilonu"
        />
        <p className="text-center p-3">
          Walls of EPS sandwich panels with polystyrene core, thickness 10 cm –
          the thermal transmittance for polystyrene is 0.38 W/m2K.
        </p>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.roof_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
          alt="Dach pawilonu"
        />
        <p className="text-center p-3">
          Roof EPS sandwich panels with polystyrene core, thickness 10 cm – the
          thermal transmittance for polystyrene is 0.38 W/m2K.
        </p>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.floor_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
          alt="Warstwy podłogi pawilonu"
        />
        <p className="text-center p-3">
          Floor of EPS sandwich panels with polyurethane core, thickness 10 cm +
          OSB board + vinyl floor - the thermal transmittance for polyurethane
          is 0.22 W/m2K.
        </p>
      </Container>
      <article className="grey-bg">
        <Container className="mt-5 pb-5 pt-5 shadow-sm">
          <Row>
            <Col lg={{ offset: 1 }}>
              <h4 className="m-3 m-lg-0 mb-lg-2">
                Dodatkowe opcje wyposażenia:
              </h4>
              <ListGroup variant="flush" className="product-table ps-5">
                <ListGroup.Item className="ps-0">
                  Okno uchylno-rozwierne z PVC 100x100 – 400 GBP
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Okno uchylno-rozwierne z PVC 90x190 – 600 GBP
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Dwufunkcyjny grzanie/chłodzenie SINCLAIR 3,4 kW – 950 GBP
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Aneks kuchenny z szafkami górnymi i dolnymi, blatem, zlewem,
                  kranem – 450 GB
                </ListGroup.Item>
                <ListGroup.Item className="ps-0">
                  Toaleta: zlew, muszla klozetowa, szafka pod zlewem, małe okno,
                  podgrzewacz wody – 400 GBP
                </ListGroup.Item>
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
        external_dimensions
        internal_dimensions
        internal_height
        exterior_color
        dimension_tolerance
        decoration
        delivery
        size
        price
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
      }
      html
    }
  }
`

export default ProductTemplate
