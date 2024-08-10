import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "react-bootstrap"

const Breadcrumbs = ({ activeSite }) => {
  return (
    <Breadcrumb>
      <Link to="/" className="me-2">home /</Link>
      {activeSite.includes("pavilion") && <Link to="/offer" className="me-2">offer /</Link>}
      <Breadcrumb.Item active>{activeSite}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
