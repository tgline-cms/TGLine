import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Logo from "../../../static/icons/TGLine_logo.svg"
import "./navbar.scss"

const Navigation = () => {
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
  `)
  return (
    <Navbar defaultExpanded expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle fixed="top" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Offer" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/offer">
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
                  <NavDropdown.Item as={Link}
                    key={node.name}
                    to={`/pavilion-${node.childrenMarkdownRemark[0].frontmatter.id}`}
                  >
                    {node.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link  as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
