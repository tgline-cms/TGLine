import * as React from "react"
import { graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
// import CMS from "decap-cms-app";

// import MyTemplate from "../../static/admin/index.html"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Container>
      <Row>
      {data.fileInformation.edges.map(({node}) =>
          (<Col key={node.id}>{node.base}</Col>))}
      </Row>
      <Row>
        {data.pavilionsParameters.edges.map(({node}) => 
          <Col lg={4} xs={6}>
            <Card>
              <GatsbyImage image={getImage(node.frontmatter.product_image)} 
              alt={`${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration} pavilion`} 
              className="card-img-top"/>
              <Card.Body>
                <Card.Title>Pavilion {node.frontmatter.size}</Card.Title>
                <Card.Text>{node.frontmatter.decoration}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
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
                gatsbyImageData(aspectRatio: 1.5, width: 600)
              }
            }
          }
        }
      }
    }
  }
`
// CMS.init();
// CMS.registerPreviewTemplate("my-template", IndexPage);