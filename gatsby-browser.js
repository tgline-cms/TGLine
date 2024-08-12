import React from "react"
import "./src/style/style.scss"
import "normalize.css"
import Layout from "./src/components/layout"

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <>{element}</>
}