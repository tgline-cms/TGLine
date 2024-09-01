import * as React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { ReactComponent as RightArrow } from "../../static/icons/arrow_right_light.svg"

const NotFoundPage = () => (
  <Container className="d-flex flex-column justify-content-center align-items-center vh-100 shadow rounded">
    <h3>Ups... Nie możemy znaleźć tej strony!</h3>
    <p>Być może została przeniesona lub zmieniona.</p>
    <Link to="/">
      <span className="error-page-link">Wróć na stronę główną.</span>
      <RightArrow className="arrow-icon"/>
    </Link>
  </Container>
)

export const Head = () => <Seo title="Strona nie znaleziona" />

export default NotFoundPage
