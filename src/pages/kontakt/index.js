import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMobile,
  faHouse,
} from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import MapImage from "../../components/mapImage/mapImage"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import "./kontakt.scss"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/contact/contact.md/" }) {
        childMarkdownRemark {
          frontmatter {
            contact_heading
            contact_email
            contact_phone
            contact_address
          }
        }
      }
    }
  `)
  const contactData = data?.file?.childMarkdownRemark

  return (
    <Container className="shadow contact">
      <Breadcrumbs activeSite="kontakt" />
      <Container className="p-3 p-lg-5">
        <motion.header
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="d-flex align-items-center mb-4"
        >
          <RightArrow className="arrow-icon" />
          <h2>Kontakt</h2>
        </motion.header>
        <motion.h3
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          {contactData?.frontmatter?.contact_heading}
        </motion.h3>
        <motion.article
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-5"
        >
          <Row className="mb-1">
            <Col sm={{ offset: 4 }} className="d-flex align-items-center">
              <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
                <a
                  href={contactData?.frontmatter?.contact_email}
                  aria-label="E-mail us"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                </a>
              </div>
              <a
                href={contactData?.frontmatter?.contact_email}
                aria-label="E-mail us"
              >
                {contactData?.frontmatter?.contact_email}
              </a>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col sm={{ offset: 4 }} className="d-flex align-items-center">
              <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
                <a
                  href={contactData?.frontmatter?.contact_phone}
                  aria-label="Call us"
                >
                  <FontAwesomeIcon icon={faMobile} className="contact-icon" />
                </a>
              </div>
              <a
                href={contactData?.frontmatter?.contact_phone}
                aria-label="call us"
              >
                {contactData?.frontmatter?.contact_phone}
              </a>
            </Col>
          </Row>
        </motion.article>
        <article>
          <Row>
            <Col sm={{ offset: 4 }} className="d-flex align-items-center">
              <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.55 }}
                className="d-flex align-items-center"
              >
                <div className="d-inline-flex justify-content-center align-items-center rounded-circle me-3 icon-background">
                  <a
                    href={contactData?.frontmatter?.contact_phone}
                    aria-label={contactData?.frontmatter?.contact_phone}
                  >
                    <FontAwesomeIcon icon={faHouse} className="contact-icon" />
                  </a>
                </div>
                <p>{contactData?.frontmatter?.contact_address}</p>
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex align-items-center justify-content-center">
              <motion.a
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.55 }}
                className="d-flex align-items-center"
                href="https://www.google.pl/maps/place/Z%C5%82ota+10,+44-121+Gliwice/@50.3058847,18.6259742,281m/data=!3m1!1e3!4m6!3m5!1s0x4711307f0099d381:0x85f1585fd4408dca!8m2!3d50.305974!4d18.626319!16s%2Fg%2F11c2ctbv6_?entry=ttu"
                target="_blank"
                rel="noreferrer"
                aria-label={`Lokalizacja firmy TGLine - przekieruj do map Google, ${contactData?.frontmatter?.contact_address}`}
              >
                <MapImage />
              </motion.a>
            </Col>
          </Row>
        </article>
      </Container>
    </Container>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
