import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Breadcrumbs from "../../components/breadcrumbs"
import Slider from "../../components/slider"
import Specification from "../../components/specification"
import Equipment from "../../components/equipment"
import ExtraEquipment from "../../components/extraEquipment"
import PavilionElements from "../../components/pavilionElements"
import Seo from "../../components/seo"
import PavilionHeader from '../../components/pavilionHeader'
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
      <PavilionHeader product={product} />
      <Slider product={product?.frontmatter?.id} />
      <Specification product={product} />
      <Equipment product={product} />
      <PavilionElements product={product} />
      <ExtraEquipment product={product} />
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
