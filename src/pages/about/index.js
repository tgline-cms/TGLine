import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumbs from '../../components/breadcrumbs'

const AboutPage = () => (
  <Layout>
    <Breadcrumbs activeSite="about us" />
    <h1>About us</h1>
  </Layout>
)

export const Head = () => <Seo title="About us" />

export default AboutPage
