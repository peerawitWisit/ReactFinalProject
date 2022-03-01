import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={'About Me'} span={'About Me'}/>
        </InnerLayout>
      </MainLayout>
    </>
  )
}

export default AboutPage