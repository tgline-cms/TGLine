import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"

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
              id
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
                  gatsbyImageData(
                    aspectRatio: 1.5
                    backgroundColor: "grey"
                    width: 1200
                    transformOptions: { fit: COVER, cropFocus: SOUTH }
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Breadcrumbs activeSite="offer" />
      <Container>
        <Row>
          {data.pavilionsParameters.edges.map(({ node }) => (
            <Col key={node.id} lg={4} xs={6}>
              <Card
                as={Link}
                to={`/pavilion-${node.frontmatter.id}`}
                className="shadow rounded"
              >
                <Card.Img
                  variant="top"
                  as={GatsbyImage}
                  image={getImage(node.frontmatter.product_image)}
                  alt={`${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration} pavilion`}
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
    </>
  )
}

export const Head = () => <Seo title="Offer page" />

export default OfferPage
