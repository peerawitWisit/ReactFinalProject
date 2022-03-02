import { motion } from 'framer-motion'
import React from 'react'

const ProductPage = () => {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  >
      ProductPage
    </motion.div>
  )
}

export default ProductPage