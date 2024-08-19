import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"
import Seo from "../../components/seo"
import MapImage from "../../components/mapImage/mapImage"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import "./kontakt.scss"

const ContactPage = () => (
  <Container className="shadow vh-100">
    <Breadcrumbs activeSite="kontakt" />
    <h2 className="text-center text-md-start">Kontakt</h2>
    <article>
      <Row className="mb-1">
        <Col sm={{ offset: 4 }} className="d-flex align-items-center">
          <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
            <a href="mailto:contact@myextraspace.uk" aria-label="E-mail us">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </a>
          </div>
          <a href="mailto:contact@myextraspace.uk" aria-label="E-mail us">
            contact@myextraspace.uk
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm={{ offset: 4 }} className="d-flex align-items-center">
          <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
            <a href="tel:+44 7984 137 873" aria-label="Call us">
              <FontAwesomeIcon icon={faMobile} className="contact-icon" />
            </a>
          </div>
          <a href="tel:+44 7984 137 873" aria-label="call us">
            +44 7984 137 873
          </a>
        </Col>
      </Row>
    </article>
    <article className="d-flex justify-content-center align-items-center">
      <a
        href="https://www.google.pl/maps/place/Z%C5%82ota+10,+44-121+Gliwice/@50.3058847,18.6259742,281m/data=!3m1!1e3!4m6!3m5!1s0x4711307f0099d381:0x85f1585fd4408dca!8m2!3d50.305974!4d18.626319!16s%2Fg%2F11c2ctbv6_?entry=ttu"
        target="_blank"
        rel="noreferrer"
        aria-label="Lokalizacja firmy TGLine - przekieruj do map Google, ulica Złota 10 Gliwice"
      >
        <MapImage />
      </a>
    </article>
  </Container>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
