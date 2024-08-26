import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Card, Container } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import "./oferta.scss"

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
        filter: { frontmatter: { markdownName: { eq: "pawilon" } } }
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
                    placeholder: BLURRED
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

    const sortedProducts = data.pavilionsParameters.edges.sort((a, b) => {
      const numA = parseInt(a.node.frontmatter.id.replace(/\D/g, ''), 10)
      const numB = parseInt(b.node.frontmatter.id.replace(/\D/g, ''), 10)
  
      return numA - numB
    })

  return (
    <Container className="shadow">
      <Breadcrumbs activeSite="Oferta" />
      <motion.header
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55 }}
        className="d-flex align-items-center"
      >
        <RightArrow className="arrow-icon me-3" />
        <h2>Produkty</h2>
      </motion.header>
      <Row className="p-sm-2 p-lg-4">
        {sortedProducts.map(({ node }) => (

          <Col key={node.id} md={6} lg={4}>
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Card
                as={Link}
                to={`/pawilon-${node.frontmatter.id}`}
                className="shadow rounded mb-3 ps-0 pe-0"
              >
                <Card.Body>
                  <Card.Title>Pawilon {node.frontmatter.size}</Card.Title>
                  <Card.Text>{node.frontmatter.decoration}</Card.Text>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  as={GatsbyImage}
                  image={getImage(node.frontmatter.product_image)}
                  alt={`Pawilon ${node.frontmatter.exterior_color} ${node.frontmatter.size} ${node.frontmatter.decoration}`}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export const Head = () => <Seo title="Oferta" />

export default OfferPage
