import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import Seo from "../../components/seo"
import Breadcrumbs from "../../components/breadcrumbs"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right_light.svg"
import PavilionsOffer from "../../components/pavilionsOffer"

const OfferPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fileInformation: allFile {
        edges {
          node {
            id
            base
            prettySize
          }
        }
      }
      pavilionsParameters: allMarkdownRemark(
        filter: { frontmatter: { markdownName: { eq: "pawilon" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              id
              decoration
              delivery
              dimension_tolerance
              exterior_color
              external_dimensions
              internal_dimensions
              internal_height
              price
              size
              product_image {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1.5
                    backgroundColor: "grey"
                    placeholder: BLURRED
                    width: 1200
                    transformOptions: { fit: COVER, cropFocus: SOUTH }
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const sortedProducts = data.pavilionsParameters.edges.sort((a, b) => {
    const numA = parseInt(a.node.frontmatter.id.replace(/\D/g, ""), 10)
    const numB = parseInt(b.node.frontmatter.id.replace(/\D/g, ""), 10)

    return numA - numB
  })

  return (
    <Container className="shadow mt-4 mb-4 rounded">
      <Breadcrumbs activeSite="Oferta" />
      <motion.header
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55 }}
        className="d-flex align-items-center"
      >
        <RightArrow className="arrow-icon me-3" />
        <h2>Produkty</h2>
      </motion.header>
      <PavilionsOffer sortedProducts={sortedProducts} />
    </Container>
  )
}

export const Head = () => <Seo title="Oferta" />

export default OfferPage
