import React from "react"
import "./src/style/style.scss"
import Layout from "./src/components/layout"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <>{element}</>
}