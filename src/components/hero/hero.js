import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Stack } from "react-bootstrap"
import { motion } from "framer-motion"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right.svg"
import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/hero/hero.md/" }) {
        childMarkdownRemark {
          frontmatter {
            hero_heading1
            hero_heading2
            hero_link
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 1284
                  breakpoints: [576, 768, 992, 1200]
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)
  const heroData = data?.file?.childMarkdownRemark

  return (
    <Container
      fluid
      className="hero-bg p-3 ps-xl-5 d-flex flex-column justify-content-center"
    >
      <div className="d-flex flex-column flex-xl-row-reverse align-items-center align-items-xl-end">
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <GatsbyImage
            image={getImage(heroData?.frontmatter?.hero_image)}
            alt="pawilon handlowy"
            className="mb-1 shadow hero-image rounded"
          />
        </motion.div>
        <motion.article
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="text-white pt-4 pt-lg-0"
        >
          <h1> {heroData?.frontmatter?.hero_heading1}</h1>
          <h2>{heroData?.frontmatter?.hero_heading2}</h2>
        </motion.article>
      </div>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-end align-items-center gap-1 gap-lg-5 me-lg-4 offer-link-container mt-3"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <Link to="/oferta" className="text-lg-center offer-link">
            <span className="me-3" role="button">{heroData?.frontmatter?.hero_link}</span>
            <RightArrow className="arrow-icon" />
          </Link>
        </motion.div>
      </Stack>
    </Container>
  )
}

export default Hero
