import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Stack } from "react-bootstrap"
import { motion } from "framer-motion"
import { ReactComponent as RightArrow } from "../../images/arrow_right.svg"
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
      className="hero-bg d-flex flex-column justify-content-between"
    >
      <div className="d-flex flex-column flex-lg-row-reverse align-items-center align-items-lg-end">
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <GatsbyImage
            image={getImage(heroData?.frontmatter?.hero_image)}
            alt="pawilon handlowy"
            className="mb-1 shadow hero-image"
          />
        </motion.div>
        <motion.article
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.55 }}
          className="text-white"
        >
          <h1> {heroData?.frontmatter?.hero_heading1}</h1>
          <h2>{heroData?.frontmatter?.hero_heading2}</h2>
        </motion.article>
      </div>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-end align-items-center gap-1 gap-lg-4 me-lg-4 offer-link-container"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.55 }}
        >
          <Link to="/oferta" className="text-lg-center offer-link">
            {heroData?.frontmatter?.hero_link}
          </Link>

          <RightArrow className="arrow-icon" />
        </motion.div>
      </Stack>
    </Container>
  )
}

export default Hero
