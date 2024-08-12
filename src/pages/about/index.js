import * as React from "react"
import Seo from "../../components/seo"
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs'

const AboutPage = () => (
  <>
    <Breadcrumbs activeSite="about us" />
    <h2>About us</h2>
  </>
)

export const Head = () => <Seo title="About us" />

export default AboutPage
