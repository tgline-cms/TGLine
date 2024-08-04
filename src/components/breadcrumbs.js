import { Link } from "gatsby"
import * as React from "react"
import { Breadcrumb } from "react-bootstrap"

const Breadcrumbs = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
)

export default Breadcrumbs
