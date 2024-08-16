import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../static/icons/TGLine_logo.svg"
import "./navbar.scss"

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { eq: "pavilions" }
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
  `);

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container className="d-flex justify-content-between">
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
              <NavDropdown title="Offer" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/offer"
                  activeClassName="text-warning"
                  onClick={handleClose}
                >
                  All products
                </NavDropdown.Item>
                {data.allFile.edges
                  .sort((a, b) => {
                    const aNumber = parseInt(
                      a.node.name.replace("pavilion-m", ""),
                      10
                    )
                    const bNumber = parseInt(
                      b.node.name.replace("pavilion-m", ""),
                      10
                    )

                    // Compare the numeric parts
                    return aNumber - bNumber
                  })
                  .map(({ node }) => (
                    <NavDropdown.Item
                      as={Link}
                      activeClassName="bg-warning text-light"
                      key={node.name}
                      to={`/pavilion-${node.childrenMarkdownRemark[0].frontmatter.id}`}
                      onClick={handleClose}
                    >
                      {node.name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/about"
                activeClassName="text-warning"
                onClick={handleClose}
              >
                About us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                activeClassName="text-warning"
                onClick={handleClose}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
