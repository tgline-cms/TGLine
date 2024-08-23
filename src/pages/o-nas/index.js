import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import { Container } from "react-bootstrap"
import { ReactComponent as RightArrow } from "../../images/arrow_right_light.svg"
import "./o_nas.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/about/about.md/" }) {
        childMarkdownRemark {
          frontmatter {
            about_heading
            about_text
            about_image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 900
                  breakpoints: [576, 768, 992, 1200]
                  formats: [AUTO, WEBP]
                )
              }
            }
            about_image2 {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 700
                  breakpoints: [576, 768, 992, 1200]
                  formats: [AUTO, WEBP]
                )
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
      <Breadcrumbs activeSite="O nas" />
      <div className="p-3 p-lg-5">
        <header className="d-flex align-items-center">
          <RightArrow className="arrow-icon" />
          <h2>O nas</h2>
        </header>
        <div className="d-lg-flex">
          <div dangerouslySetInnerHTML={{ __html: aboutData?.html }} />
          <GatsbyImage
            image={getImage(aboutData?.frontmatter?.about_image)}
            alt="pawilon handlowy"
          />
        </div>
        <article className="d-lg-flex justify-content-between">
          <GatsbyImage
            image={getImage(aboutData?.frontmatter?.about_image2)}
            alt="pawilon"
          />
          <p>{aboutData?.frontmatter?.about_text}</p>
        </article>
      </div>
    </Container>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
