import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs'

const ContactPage = () => (
  <Layout>
    <Breadcrumbs activeSite="contact" />
    <h1>Contact</h1>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
