import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { ReactComponent as RightArrow } from "../../../static/icons/arrow_right.svg"
import "./heroLink.scss"

const HeroLink = React.memo(({ heroData }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.55 }}
  >
    <Link to="/oferta" className="text-lg-center offer-link">
      <span className="me-3" role="button">
        {heroData?.frontmatter?.hero_link}
      </span>
      <RightArrow className="arrow-icon" />
    </Link>
  </motion.div>
))

export default HeroLink
