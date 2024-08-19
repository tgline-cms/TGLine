import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../static/icons/TGLine_logo.svg"
import "./navbar.scss"

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = React.useState(false)

  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setShowOffcanvas(false)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { eq: "pawilony" }
        }
      ) {
        edges {
          node {
            name
            childrenMarkdownRemark {
              frontmatter {
                id
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-expanded={showOffcanvas}
          aria-label="Toggle navigation"
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          show={showOffcanvas}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <NavDropdown title="Oferta" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/oferta"
                  activeClassName="text-warning"
                  onClick={handleClose}
                >
                  Wszystkie produkty
                </NavDropdown.Item>
                {data.allFile.edges
                  .sort((a, b) => {
                    const aNumber = parseInt(
                      a.node.name.replace("pawilon-m", ""),
                      10
                    )
                    const bNumber = parseInt(
                      b.node.name.replace("pawilon-m", ""),
                      10
                    )

                    return aNumber - bNumber
                  })
                  .map(({ node }) => (
                    <NavDropdown.Item
                      as={Link}
                      activeClassName="bg-warning text-light"
                      key={node.name}
                      to={`/pawilon-${node.childrenMarkdownRemark[0].frontmatter.id}`}
                      onClick={handleClose}
                    >
                      {node.name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/o-nas"
                activeClassName="text-warning"
                onClick={handleClose}
              >
                O nas
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/kontakt"
                activeClassName="text-warning"
                onClick={handleClose}
              >
                Kontakt
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>
  )
}

export default Navigation
