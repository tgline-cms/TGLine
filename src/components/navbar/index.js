import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
        <Navbar.Brand as={Link} to="/">
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
                  <NavDropdown.Item key={node.name}>
                    <Nav.Link
                      as={Link}
                      to={`/pavilion-${node.childrenMarkdownRemark[0].frontmatter.id}`}
                    >
                      {node.name}
                    </Nav.Link>
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
