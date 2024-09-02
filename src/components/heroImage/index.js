import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import "./heroImage.scss"



const HeroImage = React.memo(({ heroData }) => (
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
  )
)

export default HeroImage