import { motion } from 'framer-motion'
import React from 'react'
import Port from '../Components/Port'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'


const Portfolio = () => {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  >
      <MainLayout>
        <InnerLayout>
          <Title title={'Portfolio'} span={'Portfolio'}/>
          <Port/>
        </InnerLayout>
      </MainLayout>
    </motion.div>
  )
}

export default Portfolio