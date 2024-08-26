import React from "react"
import { graphql } from "gatsby"
import { Container, ListGroup, Stack } from "react-bootstrap"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Slider from "../../components/slider"
import Seo from "../../components/seo"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductTemplate = ({ data }) => {
  const product = data?.markdownRemark

  if (!product) {
    return <p>Produkt nie został znaleziony.</p>
  }

  return (
    <Container className="shadow min-vh-100">
      <Breadcrumbs activeSite={`pawilon-${product?.frontmatter?.id}`} />
      <header>
        <Stack direction="horizontal">
          <RightArrow className="arrow-icon me-3" />
          <h3>Pawilon {product?.frontmatter?.size}</h3>
        </Stack>
        <h4> {product?.frontmatter?.price} - zawiera koszt dostawy</h4>
        <h5>Nr ref. {product?.frontmatter?.id}</h5>
      </header>
      {/* <Container className="p-3 p-lg-5"> */}
      <Slider product={product?.frontmatter?.id} />
      {/* </Container> */}
      <Container className="p-3 p-lg-5">
        <div dangerouslySetInnerHTML={{ __html: product?.html }} />
      </Container>
      <article className="grey-bg">
        <Container className="p-3 p-lg-5">
          <h4 className="mb-3">Specyfikacja</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Wymiary zewnętrzne: {product?.frontmatter?.external_dimensions}
            </ListGroup.Item>
            <ListGroup.Item>
              Wymiary wewnętrzne: {product?.frontmatter?.internal_dimensions}
            </ListGroup.Item>
            <ListGroup.Item>
              Wysokość wewnętrzna: {product?.frontmatter?.internal_height}
            </ListGroup.Item>
            <ListGroup.Item>
              Tolerancja wymiarów: {product?.frontmatter?.dimension_tolerance}
            </ListGroup.Item>
            <ListGroup.Item>
              Wykończenie: {product?.frontmatter?.decoration}
            </ListGroup.Item>
            <ListGroup.Item>
              Ściany z płyt warstwowych EPS z rdzeniem polistyrenowym o grubości
              10 cm – współczynnik przenikania ciepła dla polistyrenu wynosi
              0,38 W/m2K.
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </article>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.wall_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
        />
        <p>
          Walls of EPS sandwich panels with polystyrene core, thickness 10 cm –
          the thermal transmittance for polystyrene is 0.38 W/m2K.
        </p>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.roof_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
        />
        <p>
          Roof EPS sandwich panels with polystyrene core, thickness 10 cm – the
          thermal transmittance for polystyrene is 0.38 W/m2K.
        </p>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <GatsbyImage
          image={getImage(product?.frontmatter?.floor_image)}
          className="mb-3 mb-lg-5 mt-lg-5"
        />
        <p>
          Floor of EPS sandwich panels with polyurethane core, thickness 10 cm +
          OSB board + vinyl floor - the thermal transmittance for polyurethane
          is 0.22 W/m2K.
        </p>
      </Container>
      <Container className="p-3 p-lg-5">
        <h4>Wyposażenie</h4>
        <ListGroup>
          <ListGroup.Item>Instalacja elektryczna: AC</ListGroup.Item>
          <ListGroup.Item>oświetlenie LED</ListGroup.Item>
          <ListGroup.Item>skrzynka bezpieczników</ListGroup.Item>
          <ListGroup.Item>2 gniazdka</ListGroup.Item>
          <ListGroup.Item>instalacja elektryczna</ListGroup.Item>
          <ListGroup.Item>
            1x Aluminiowe drzwi jednoskrzydłowe 108 x 110 cm
          </ListGroup.Item>
          <ListGroup.Item>
            2x Okna z dwiema warstwami szkła: 100 x 200 cm
          </ListGroup.Item>
          <ListGroup.Item>
            Konstrukcja stalowa – wykonana z profilu stalowego 50x50x4 mm, w tym
            haki transportowe
          </ListGroup.Item>
          <ListGroup.Item>
            Transport i rozładunek na terenie Polski wliczone w cenę
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <article className="grey-bg">
        <Container className="mt-5 p-3 p-lg-5">
          <h4>Dodatkowe opcje</h4>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              Okno uchylno-rozwierne z PVC 100x100 – 400 GBP
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Okno uchylno-rozwierne z PVC 90x190 – 600 GBP
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Dwufunkcyjny grzanie/chłodzenie SINCLAIR 3,4 kW – 950 GBP
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Aneks kuchenny z szafkami górnymi i dolnymi, blatem, zlewem,
              kranem – 450 GB
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Toaleta: zlew, muszla klozetowa, szafka pod zlewem, małe okno,
              podgrzewacz wody – 400 GBP
            </ListGroup.Item>
          </ListGroup>
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
