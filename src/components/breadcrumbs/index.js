import * as React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from "@fortawesome/free-solid-svg-icons"
import "./breadcrumbs.scss"


const Breadcrumbs = ({ activeSite }) => {
  return (
    <Breadcrumb className="p-3">
      <Link to="/" className="me-2">Strona główna <FontAwesomeIcon icon={faAngleRight} /></Link>
      {activeSite.includes("pawilon") && <Link to="/oferta" className="me-2">Oferta <FontAwesomeIcon icon={faAngleRight} /></Link>}
      <Breadcrumb.Item active>{activeSite}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Breadcrumbs
