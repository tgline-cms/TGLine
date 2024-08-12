import * as React from "react"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons"

const ContactPage = () => (
  <>
    <Breadcrumbs activeSite="contact" />
    <h2>Contact</h2>
    <FontAwesomeIcon icon={faEnvelope} />
    <a href="mailto:contact@myextraspace.uk">contact@myextraspace.uk</a>
    <FontAwesomeIcon icon={faMobile} />
    <a href="tel:+44 7984 137 873">+44 7984 137 873</a>
  </>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
