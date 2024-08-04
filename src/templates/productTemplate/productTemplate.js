import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const ProductTemplate = ({ data }) => {
  const product = data?.markdownRemark

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <Layout>
      <p>{product.frontmatter.id}</p>
      <div dangerouslySetInnerHTML={{ __html: product.html }} />
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
