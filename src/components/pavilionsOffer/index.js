import React from "react"
import { Link } from "gatsby"
import { Col, Row, Card } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import "./pavilionOffer.scss"

const PavilionsOffer = React.memo(({ sortedProducts }) => (
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
            className="shadow rounded mb-4"
          >
            <Card.Body className="p-5 ps-3 rounded">
              <Card.Title>Pawilon {node.frontmatter.size}</Card.Title>
              <Card.Text>{node.frontmatter.id}</Card.Text>
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
))

export default PavilionsOffer
