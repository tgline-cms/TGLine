import * as React from "react"
import Seo from "../components/seo"
import Hero from '../components/hero'

const IndexPage = () => (
  <>
    <Hero />
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="TGLine - Commercial Pavilions" />

export default IndexPage

