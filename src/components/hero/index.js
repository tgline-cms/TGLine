import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Stack } from "react-bootstrap"
import HeroImage from "../heroImage"
import HeroTitle from "../heroTitle"
import HeroLink from '../heroLink'
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
        <HeroImage heroData={heroData} />
        <HeroTitle heroData={heroData} />
      </div>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-end align-items-center gap-1 gap-lg-5 me-lg-4 offer-link-container mt-3"
      >
        <HeroLink heroData={heroData} />
      </Stack>
    </Container>
  )
}

export default Hero
