import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs"
import Socials from "../../components/socials"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right_light.svg"
import "./kontakt.scss"
import ContactInfo from "../../components/contactInfo"

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
        <ContactInfo contactData={contactData} />
      </Container>
      <Socials />
    </Container>
  )
}

export const Head = () => <Seo title="Kontakt" />

export default ContactPage
