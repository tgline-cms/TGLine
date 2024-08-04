import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "react-bootstrap"

const Breadcrumbs = ({ activeSite }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">home</Link>
      </Breadcrumb.Item>
      {activeSite.includes("pavilion") && (
        <Breadcrumb.Item>
          <Link to="/offer">offer</Link>
        </Breadcrumb.Item>
      )}
      <Breadcrumb.Item active>{activeSite}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
