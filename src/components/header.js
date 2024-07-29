import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../static/icons/TGLine_logo.svg"


const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
    >
      <Logo />
    </Link>
  </header>
)

export default Header
