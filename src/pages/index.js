import * as React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Container>
      <Row>
      {data.fileInformation.edges.map(({node}) =>
          (<Col sm="3" md="6" lg="12" key={node.id}>{node.base}</Col>))}
      </Row>
      {data.pavilionsParameters.edges.map(({node}) => 
        (<Row>
          <Col md="6">
            <h3>Pavilion {node.frontmatter.size}</h3>
            <p>{node.frontmatter.decoration}</p>
            <GatsbyImage image={getImage(node.frontmatter.product_image)} alt={`${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration} pavilion`}/>
          </Col>
        </Row>
        ))}
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
    pavilionsParameters: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            decoration
            delivery
            dimension_tolerance
            exterior_color
            external_dimensions
            internal_dimensions
            internal_height
            price
            size
            product_image {
              childImageSharp {
                gatsbyImageData 
              }
            }
          }
        }
      }
    }
  }
`
