import { motion } from 'framer-motion'
import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const ContactPage = () => {
  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  >
      <MainLayout>
        <InnerLayout>
          <Title title={'Contact'} span={'Contact'}/>
        </InnerLayout>
      </MainLayout>
    </motion.div>
  )
}

export default ContactPage