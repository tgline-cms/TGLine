import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./hero.scss"
import { Container } from "react-bootstrap"
import { ReactComponent as RightArrow } from "../../images/arrow_right.svg"

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
                  width: 1084
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
    <Container fluid className="hero-bg d-flex flex-column justify-content-between">
      <div className="d-flex flex-column flex-lg-row-reverse align-items-center align-items-lg-end">
        <GatsbyImage
          image={getImage(heroData?.frontmatter?.hero_image)}
          alt="pawilon handlowy"
          className="mb-1 shadow"
        />
        <article>
          <h1 className="text-white">{heroData?.frontmatter?.hero_heading1}</h1>
          <h2>{heroData?.frontmatter?.hero_heading2}</h2>
        </article>
      </div>
      <div className="d-flex justify-content-sm-end align-items-center gap-1 gap-lg-4 me-lg-4">
        <Link to="/oferta" className="text-lg-center offer-link">
          {heroData?.frontmatter?.hero_link}
        </Link>
        <RightArrow className="arrow-icon"/>
      </div>
    </Container>
  )
}

export default Hero
