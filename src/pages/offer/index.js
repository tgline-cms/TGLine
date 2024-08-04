import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card, Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumbs from '../../components/breadcrumbs'

const OfferPage = () => {
  const data = useStaticQuery(graphql`
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
            id
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
  `)

  return (
    <Layout>
      <Breadcrumbs activeSite="offer" />
      <h1>Hi offer page</h1>
      <Link to="/">Go back to the homepage</Link>
      <Container>
        <Row>
          {data.pavilionsParameters.edges.map(({ node }) => (
            <Col key={node.id} lg={4} xs={6}>
              <Card>
                <GatsbyImage
                  image={getImage(node.frontmatter.product_image)}
                  alt={`${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration} pavilion`}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>Pavilion {node.frontmatter.size}</Card.Title>
                  <Card.Text>{node.frontmatter.decoration}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Offer page" />

export default OfferPage
