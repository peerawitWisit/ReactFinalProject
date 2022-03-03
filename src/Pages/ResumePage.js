import React from 'react'
import Skills from '../Components/Skills'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Resume from '../Components/Resume'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ResumePage = () => {
  return (
    <motion.div  initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}} >
      <MainLayout>
        <InnerLayout>
          <Skills/>
          <Resume />
        </InnerLayout>
      </MainLayout>
    </motion.div>
    
  )
}



export default ResumePage