import React from "react"
import { graphql } from "gatsby"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Slider from "../../components/slider"
import Seo from "../../components/seo"
import { Container } from 'react-bootstrap'

const ProductTemplate = ({data}) => {
  const product = data?.markdownRemark

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <Container className="shadow min-vh-100">
      <Breadcrumbs activeSite={`pavilion-${product.frontmatter.id}`} />
      <p>{product.frontmatter.id}</p>
      <div dangerouslySetInnerHTML={{ __html: product.html }} />
      <Slider product={product.frontmatter.id} />
    </Container>
  )
}

export const Head = () => <Seo title="pavilion details" />

export const query = graphql`
  query ($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
      }
      html
    }
  }
`

export default ProductTemplate
