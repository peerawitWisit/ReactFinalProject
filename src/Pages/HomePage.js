import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import { Button } from '@material-ui/core'
import { motion } from 'framer-motion'


const HomePage = () => {
  return (
    <motion.div initial={{opacity: 0}}
                animate={{opacity:1}}
                exit={{opacity:0}}  >
        <HomePageStyled>
        <div className='typography'>
            <h1>Hi, I'm <span>Peerawit Wisitsurawong</span></h1>
            <p>Good at coding skill and Love to playing games</p>
            <div className='icons'>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='tran'>
                    <a href='https://www.facebook.com/peerawit.w'><div className='icon i-facebook'><FacebookIcon/></div></a>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='tran'>
                    <a href='https://github.com/peerawitWisit'><div className='icon i-github'><GithubIcon/></div></a>
                </motion.div>
            </div>
        </div>
        </HomePageStyled>
    </motion.div>
    
  )
}



const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    a{
        padding: 0.5rem;
    }
   
    .tran{
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }


            }

            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage