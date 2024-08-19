import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/home/home.md/" }) {
        childMarkdownRemark {
          frontmatter {
            hero_heading1
            hero_heading2
            hero_link
            hero_image {
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
  const heroData = data?.file?.childMarkdownRemark

  return (
    <>
    <h1>{heroData?.frontmatter?.hero_heading1}</h1>
      <GatsbyImage
        image={getImage(heroData?.frontmatter.hero_image)}
        alt="pawilon handlowy"
      />
    </>
  )
}

export default Hero
