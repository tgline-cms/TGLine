import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right_light.svg"
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
                  width: 900
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
    <Container className="shadow min-vh-100 pb-5 mt-4 mb-4 rounded">
      <Breadcrumbs activeSite="O nas" />
      <Row
        className="d-lg-flex flex-column align-items-center flex-xl-row p-3 pb-0 pb-xl-2 ps-xl-5"
        lg={{ offset: 4 }}
      >
        <Col className="align-self-start">
          <motion.header
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="d-flex align-items-center"
          >
            <RightArrow className="arrow-icon me-2" />
            <h2>O nas</h2>
          </motion.header>
          <div
            dangerouslySetInnerHTML={{ __html: aboutData?.html }}
            className="about-text"
          />    
        </Col>
        <Col>
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <GatsbyImage
              image={getImage(aboutData?.frontmatter?.about_image)}
              alt="pawilon handlowy"
              className="about-image-1 shadow rounded"
            />
          </motion.div>
        </Col>
      </Row>
      <Row className="second-row p-3 ps-lg-5 pt-0">
        <Col>
          <article className="d-xl-flex flex-xl-row-reverse justify-content-xl-end gap-3">
            <p className="p-3 pe-4 mt-3 mb-3 mt-lg-4 ms-lg-3 about-text-2">
              {aboutData?.frontmatter?.about_text}
            </p> 
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <GatsbyImage
                image={getImage(aboutData?.frontmatter?.about_image2)}
                alt="pawilon"
                className="about-image-2 shadow mt-lg-2 rounded"
              />
            </motion.div>
          </article>
        </Col>
      </Row>
    </Container>
  )
}

export const Head = () => <Seo title="O nas" />

export default AboutPage
