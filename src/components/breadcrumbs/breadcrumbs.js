import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "react-bootstrap"
import "./breadcrumbs.scss"

const Breadcrumbs = ({ activeSite }) => {
  return (
    <Breadcrumb className="p-3 ps-0">
      <Link to="/" className="me-2">home /</Link>
      {activeSite.includes("pawilon") && <Link to="/oferta" className="me-2">oferta /</Link>}
      <Breadcrumb.Item active>{activeSite}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
