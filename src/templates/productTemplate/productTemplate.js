import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Slider from "../../components/slider"

const ProductTemplate = ({ data }) => {
  const product = data?.markdownRemark

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <Layout>
      <Breadcrumbs activeSite={`pavilion-${product.frontmatter.id}`} />
      <p>{product.frontmatter.id}</p>
      <div dangerouslySetInnerHTML={{ __html: product.html }} />
      <Slider product={product.frontmatter.id} />
    </Layout>
  )
}

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
