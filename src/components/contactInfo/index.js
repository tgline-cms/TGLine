import React from "react"
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMobile,
  faHouse,
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import MapImage from "../mapImage"
import "./contactInfo.scss"

const ContactInfo = React.memo(({ contactData }) => {
  const contactMapUrl = contactData?.frontmatter?.contact_map_url
  const formattedContactMapUrl =
    contactMapUrl?.startsWith("http://") ||
    contactMapUrl?.startsWith("https://")
      ? contactMapUrl
      : `https://${contactMapUrl}`
  return (
    <>
      <motion.article
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55 }}
        className="mt-5"
      >
        <Row className="d-flex">
          <Col
            className="d-flex flex-column align-items-end gap-1 gap-md-3"
            xs={3}
            lg={5}
          >
            <div className="d-inline-flex justify-content-center align-items-center rounded-circle icon-background">
              <a
                href={contactData?.frontmatter?.contact_email}
                aria-label="E-mail us"
              >
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
            </div>
            <div className="d-inline-flex justify-content-center align-items-center rounded-circle icon-background">
              <a
                href={contactData?.frontmatter?.contact_phone}
                aria-label={contactData?.frontmatter?.contact_phone}
              >
                <FontAwesomeIcon icon={faMobile} className="contact-icon" />
              </a>
            </div>
            <div className="d-inline-flex justify-content-center align-items-center rounded-circle icon-background">
              <a
                href={contactData?.frontmatter?.contact_phone}
                aria-label={contactData?.frontmatter?.contact_phone}
              >
                <FontAwesomeIcon icon={faHouse} className="contact-icon" />
              </a>
            </div>
          </Col>
          <Col
            className="d-flex flex-column justify-content-around"
            xs={9}
            lg={7}
          >
            <a
              href={contactData?.frontmatter?.contact_email}
              aria-label="E-mail us"
            >
              {contactData?.frontmatter?.contact_email}
            </a>
            <a
              href={contactData?.frontmatter?.contact_phone}
              aria-label="call us"
            >
              {contactData?.frontmatter?.contact_phone}
            </a>
            <p className="mb-0">{contactData?.frontmatter?.contact_address}</p>
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
      </motion.article>
    </>
  )
})

export default ContactInfo
