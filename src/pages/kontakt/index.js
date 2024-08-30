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
import Socials from "../../components/socials/socials"
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
            contact_map_url
          }
        }
      }
    }
  `)
  const contactData = data?.file?.childMarkdownRemark
  const contactMapUrl = contactData?.frontmatter?.contact_map_url
  const formattedContactMapUrl = contactMapUrl?.startsWith('http://') || contactMapUrl?.startsWith('https://')
  ? contactMapUrl
  : `https://${contactMapUrl}`;

  return (
    <Container className="shadow contact min-vh-100 pb-5 mt-4 mb-4 rounded">
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
            <Col
              xs={{ offset: 1 }}
              sm={{ offset: 2 }}
              lg={{ offset: 4 }}
              className="d-flex align-items-center"
            >
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
            <Col
              xs={{ offset: 1 }}
              sm={{ offset: 2}}
              lg={{ offset: 4 }}
              className="d-flex align-items-center"
            >
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
            <Col
              xs={{ offset: 1 }}
              sm={{ offset: 2 }}
              lg={{ offset: 4 }}
              className="d-flex align-items-center"
            >
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
                <p className="mb-0">
                  {contactData?.frontmatter?.contact_address}
                </p>
              </motion.div>
            </Col>
          </Row>
          {contactMapUrl && (
            <Row className="mt-5">
              <Col className="d-flex align-items-center justify-content-center">
                <motion.a
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.55 }}
                  className="d-flex align-items-center"
                  href={formattedContactMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Lokalizacja firmy TGLine - przekieruj do map Google, ${contactData?.frontmatter?.contact_address}`}
                >
                  <MapImage />
                </motion.a>
              </Col>
            </Row>
          )}
        </article>
      </Container>
      <Socials />
    </Container>
  )
}

export const Head = () => <Seo title="Kontakt" />

export default ContactPage
