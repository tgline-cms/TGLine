import React from "react"
import { motion } from "framer-motion"
import "./heroTitle.scss"

const HeroTitle = React.memo(({ heroData }) => (
  <motion.article
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.55 }}
    className="text-white pt-4 pt-lg-0"
  >
    <h1> {heroData?.frontmatter?.hero_heading1}</h1>
    <h2>{heroData?.frontmatter?.hero_heading2}</h2>
  </motion.article>
))

export default HeroTitle
