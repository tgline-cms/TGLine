import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
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
 `)
  const aboutData = data?.markdownRemark

  return (
    <>
      <Breadcrumbs activeSite="about us" />
      <div dangerouslySetInnerHTML={{ __html: aboutData.html }} />
      <GatsbyImage
        image={getImage(aboutData.frontmatter.about_image)}
        alt="pavilion"
      />
    </>
  )
}

export const Head = () => <Seo title="About us" />

export default AboutPage
