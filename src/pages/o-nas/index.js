import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
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
      <motion.header
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="d-flex align-items-center"
      >
        <RightArrow className="arrow-icon me-4" />
        <h2>O nas</h2>
      </motion.header>
      <div className="d-lg-flex">
        <div dangerouslySetInnerHTML={{ __html: aboutData?.html }} />
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <GatsbyImage
            image={getImage(aboutData?.frontmatter?.about_image)}
            alt="pawilon handlowy"
          />
        </motion.div>
      </div>
      <article className="d-lg-flex justify-content-between">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <GatsbyImage
            image={getImage(aboutData?.frontmatter?.about_image2)}
            alt="pawilon"
          />
        </motion.div>

        <p>{aboutData?.frontmatter?.about_text}</p>
      </article>
    </Container>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
