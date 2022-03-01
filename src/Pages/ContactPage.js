import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const ContactPage = () => {
  return (
    <>
    <MainLayout>
        <InnerLayout>
          <Title title={'Contact'} span={'Contact'}/>
        </InnerLayout>
    </MainLayout>
    </>
  )
}

export default ContactPage