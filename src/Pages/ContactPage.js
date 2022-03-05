import { motion } from 'framer-motion'
import React from 'react'
import { ContactUs } from '../Components/ContactUs'
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
          <ContactUs/>
        </InnerLayout>
      </MainLayout>
    </motion.div>
  )
}

export default ContactPage