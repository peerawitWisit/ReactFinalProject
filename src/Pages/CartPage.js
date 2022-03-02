import { motion } from 'framer-motion'
import React from 'react'

const CartPage = () => {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  >
      CartPage
    </motion.div>
  )
}

export default CartPage