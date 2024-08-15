import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { Container } from 'react-bootstrap'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/about/about.md/" }) {
        childMarkdownRemark {
          frontmatter {
            about_heading
            about_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
        }
      }
    }
  `)
  const aboutData = data?.file?.childMarkdownRemark

  return (
    <Container className="shadow min-vh-100">
      <Breadcrumbs activeSite="about us" />
      <div dangerouslySetInnerHTML={{ __html: aboutData?.html }} />
      <GatsbyImage
        image={getImage(aboutData?.frontmatter.about_image)}
        alt="pavilion"
      />
    </Container>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
