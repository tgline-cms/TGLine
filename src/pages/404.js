import * as React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <Container className="d-flex vh-100">
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col md={8} className="text-center">
          <h3>Ooops... we can't find that page!</h3>
          <p>
            The page you were trying to get to might have been moved or changed.
          </p>
          <Link to="/">Come back home.</Link>
        </Col>
      </Row>
    </Container>
)

export const Head = () => <Seo title="Page not found" />

export default NotFoundPage
