import * as React from "react"
import { Container, Stack } from "react-bootstrap"
import { Link } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Container className="d-flex justify-content-center vh-100 shadow">
    <Stack direction="vertical" className="h-100 justify-content-center">
      <h3>Ups... Nie możemy znaleźć tej strony!</h3>
      <p>Być może została przeniesona lub zmieniona.</p>
      <Link to="/">Wróć na stronę główną.</Link>
    </Stack>
  </Container>
)

export const Head = () => <Seo title="Strona nie znaleziona" />

export default NotFoundPage
