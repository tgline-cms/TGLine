import React from "react"
import { Container } from "react-bootstrap"
import "./footer.scss"

function Footer() {
  return (
    <footer className="fixed-lg-bottom">
      <Container fluid className="p-1 p-lg-3 d-flex flex-column flex-lg-row justify-content-lg-between">
        <div className="text-center text-lg-start">
          <span>©2024&middot;TGLine.</span>
          {` `}
          <span>Wszelkie prawa zastrzeżone</span>
        </div>
        <div className="text-center text-lg-start">
          <span>Projekt i realizacja</span> {` `}
          <a
            href="https://beatamaro.github.io/"
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
