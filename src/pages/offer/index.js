import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import "./offer.scss"

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
      pavilionsParameters: allMarkdownRemark(
        filter: { frontmatter: { markdownName: { eq: "pavilion" } } }
      ) {
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
      <Container className="shadow">
        <Breadcrumbs activeSite="offer" />
        <Row className="p-sm-2 p-lg-4">
          {data.pavilionsParameters.edges.map(({ node }) => (
            <Col key={node.id} sx={12} lg={4}>
              <Card
                as={Link}
                to={`/pavilion-${node.frontmatter.id}`}
                className="shadow rounded mb-3 ps-0 pe-0"
              >
                <Card.Body>
                  <Card.Title>Pavilion {node.frontmatter.size}</Card.Title>
                  <Card.Text>{node.frontmatter.decoration}</Card.Text>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  as={GatsbyImage}
                  image={getImage(node.frontmatter.product_image)}
                  alt={`${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration} pavilion`}
                />
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
