import * as React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Container className="d-flex vh-100 shadow">
    <Row className="justify-content-center align-items-center flex-grow-1">
      <Col md={8} className="text-center">
        <h3>Ooops... Nie możemy znaleźć tej strony!</h3>
        <p>Być może została przeniesona lub zmieniona.</p>
        <Link to="/">Wróć na stronę główną.</Link>
      </Col>
    </Row>
  </Container>
)

export const Head = () => <Seo title="Strona nie znaleziona" />

export default NotFoundPage
