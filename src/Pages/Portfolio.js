import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const Portfolio = () => {
  return (
    <MainLayout>
        <InnerLayout>
          <Title title={'Portfolio'} span={'Portfolio'}/>
        </InnerLayout>
    </MainLayout>
  )
}

export default Portfolio