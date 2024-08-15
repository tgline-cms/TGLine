import * as React from "react"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"
import "./contact.scss"

const ContactPage = () => (
  <Container className="shadow vh-100">
    <Breadcrumbs activeSite="contact" />
    <h2>Contact</h2>
    <article>
      <Row className="mb-1">
        <Col sm={{ offset: 4 }} className="d-flex align-items-center">
          <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
            <a href="mailto:contact@myextraspace.uk" aria-label="E-mail us">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </a>
          </div>
          <a href="mailto:contact@myextraspace.uk" aria-label="E-mail us">contact@myextraspace.uk</a>
        </Col>
      </Row>
      <Row>
        <Col sm={{ offset: 4 }} className="d-flex align-items-center">
          <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
            <a href="tel:+44 7984 137 873" aria-label="Call us">
              <FontAwesomeIcon icon={faMobile} className="contact-icon" />
            </a>
          </div>
          <a href="tel:+44 7984 137 873" aria-label="call us">+44 7984 137 873</a>
        </Col>
      </Row>
    </article>
  </Container>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
