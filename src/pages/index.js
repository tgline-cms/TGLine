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
      <ul>
      {data.fileInformation.edges.map(({node}) =>
          (<li key={node.id}>{node.base}</li>))}
      </ul>
      {data.pavilionsParameters.edges.map(({node}) => 
        (<Row>
          <Col>
            <p>{node.frontmatter.Decoration}</p>
            <GatsbyImage image={getImage(node.frontmatter.product_image)} alt={`${node.frontmatter.Exterior_color} ${node.frontmatter.Size} ${node.frontmatter.Decoration} pavilion`}/>
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
