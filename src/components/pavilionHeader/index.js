import React from "react"
import { motion } from "framer-motion"
import { Stack, Badge } from "react-bootstrap"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right_light.svg"

const PavilionHeader = React.memo(({ product }) => (
  <div className="header-arrow-wrapper p-3 shadow-sm">
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.55 }}
    >
      <RightArrow className="arrow-icon me-2" />
    </motion.div>
    <motion.header
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.55 }}
      className="d-flex flex-column mt-4"
    >
      <h3>Pawilon {product?.frontmatter?.size}</h3>
      <Stack>
        <h4>{product?.frontmatter?.price}</h4>
        <span>{product?.frontmatter?.price_description}</span>
        <h5 className="mt-3 mb-3">
          <Badge bg="secondary">
            {product?.frontmatter?.ref_description} {product?.frontmatter?.id}
          </Badge>
        </h5>
      </Stack>
    </motion.header>
  </div>
))

export default PavilionHeader
