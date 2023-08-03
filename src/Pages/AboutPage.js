import { motion} from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import aboutPic from '../img/about3.jpg'

const AboutPage = () => {

  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  >
      <MainLayout>
        <InnerLayout>
          <Title title={'About Me'} span={'About Me'}/>
          <AboutStyled>
          <div className='image'>
            <img src={aboutPic} alt=''/>
          </div>
          <fieldset className='info'>
              <legend><h2>Personal Infomation</h2></legend>
              <div>
                <p>
                  <b>Name</b> : Peerawit Wisitsurawong
                  <b className='space'>Nickname</b> : Pooh
                </p>
                <p>
                  <b>Gender</b> : Male
                  <b className='space'>Age</b> : 20
                </p>
                <p>
                  <b>Date of Birth</b> : 29 March 2001
                </p>
                <p className='borderP'>
                  <h2>Address</h2>
                </p>
                <p>
                  <b>No</b> : 9/161
                  <b className='space'>Soi</b> : 21
                  <b className='space'>Road</b> : Phahonyothin
                </p>
                <p>
                  <b>Tambol/Khwang</b> : Chatuchak
                  <b className='space'>District/Khet</b> : Chatuchak
                </p>
                <p>
                  <b>Province</b> : Bangkok
                  <b className='space'>Zipcode</b> : 10900
                  <b className='space'>Country</b> : Thailand
                </p>
                <p>
                  <b>Mobile</b> : 080-970-6872
                  <b className='space'>Email</b> : wi.peerawit@gmail.com
                </p>
              </div>
            </fieldset>
          </AboutStyled>
        </InnerLayout>
      </MainLayout>
    </motion.div>
  )
}
const AboutStyled = styled.div`
  margin-top: 3rem;
  
  .image{
    padding-bottom: 2rem;
    img{
      border-radius: 10px;
      width: 80%
    }
  }
  
  
  b{
    text-decoration-line: underline;
    font-size: 1.5rem;
  }

  p{
    font-size: 1.5rem;
    line-height: 4rem;
    overflow: auto;
  }

  fieldset{
    border: 8px double var(--border-color); 
    padding: 20px; 
    width: 80%;
    border-radius: 10px;
    legend{
      color: var(--topic-color);
    }
  }

  .space{
    margin-left: 2rem;
  }
  
  .borderP{
    border-top: 3px dashed var(--border-color)
    
  }




`

export default AboutPage