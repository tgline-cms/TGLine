import React from "react"
import { Container } from "react-bootstrap"
import "./footer.scss"

function Footer() {
  return (
    <footer className="fixed-lg-bottom pb-2">
      <Container fluid className="p-2 p-lg-3 d-flex flex-column flex-md-row justify-content-md-between">
        <div className="text-center text-lg-start">
          <span>©2024&middot;TGLine.</span>
          {` `}
          <span>Wszelkie prawa zastrzeżone</span>
        </div>
        <div className="text-center text-lg-start">
          <span>Projekt i realizacja</span> {` `}
          <a
            href="https://www.beatamaro.github.io/"
            target="_blank"
            rel="noreferrer"
            className="text-warning"
          >
            BM
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
