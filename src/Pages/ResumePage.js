import React from 'react'
import Skills from '../Components/Skills'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Resume from '../Components/Resume'

const ResumePage = () => {
  return (
    <MainLayout>
        <InnerLayout>
          <Skills/>
          <Resume/>
        </InnerLayout>
    </MainLayout>
    
  )
}



export default ResumePage