/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "normalize.css"
import "../style/style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="container">{children}</main>
      <footer className="fixed-bottom">
        © 2024 &middot; Built with
        {` `}
        <a href="https://beatamaro.github.io/" target="_blank" rel="noreferrer">
          Beta
        </a>
      </footer>
    </>
  )
}

export default Layout
