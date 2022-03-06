import React from 'react'
import styled from 'styled-components'
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import f1 from '../img/FOutbreaking/F1.png'
import f2 from '../img/FOutbreaking/F2.png'
import f3 from '../img/FOutbreaking/F3.png'
import f4 from '../img/FOutbreaking/F4.png'
import f5 from '../img/FOutbreaking/F5.png'
import f6 from '../img/FOutbreaking/F6.png'

import cat1 from '../img/CatJump/CatJump1.png'
import cat2 from '../img/CatJump/CatJump2.png'
import cat3 from '../img/CatJump/CatJump3.png'

import d1 from '../img/3Dshooting/3D1.png'
import d2 from '../img/3Dshooting/3D2.png'
import d3 from '../img/3Dshooting/3D3.png'
import d4 from '../img/3Dshooting/3D4.png'
import d5 from '../img/3Dshooting/3D5.png'
import d6 from '../img/3Dshooting/3D6.png'

import t1 from '../img/ToiletAdventure/Toilet1.png'
import t2 from '../img/ToiletAdventure/Toilet2.png'
import t3 from '../img/ToiletAdventure/Toilet3.png'
import t4 from '../img/ToiletAdventure/Toilet4.png'
import t5 from '../img/ToiletAdventure/Toilet5.png'
import t6 from '../img/ToiletAdventure/Toilet6.png'
import Member from './Member';
import MemberCon from './MemberCon';

const Port = () => {
  return (
    <PortStyled>
        <div className='first'>
            <p><b>F Outbreaking(Demo)</b></p>
            <h6>Year 1 Final-Project with Constuct 2</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/fED5JZW5lwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={f1} alt='' />
                <img src={f2} alt='' />
                <img src={f3} alt='' />
                <img src={f4} alt='' />
                <img src={f5} alt='' />
                <img src={f6} alt='' />
            </div>
            <MemberCon/>
            <h5>Download: <a href='https://drive.google.com/file/d/1YnVxS4ECF8Kj-2N4VJ2SXTr9wuOZ0RcX/view?usp=sharing'>here</a></h5>
        </div>

        <div className='other'>
            <p><b>Gstore</b></p>
            <h6>Year 3 Python Final-Project</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/LA9BpjgVqF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div className='other'>
            <p><b>CatJump</b></p>
            <h6>Year 3 Unity Project 1</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/NHFMJApj6Dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={cat1} alt='' />
                <img src={cat2} alt='' />
                <img src={cat3} alt='' />
            </div>
            <Member/>
        </div>

        <div className='other'>
            <p><b>3Dshooting</b></p>
            <h6>Year 3 Unity In-Class (no sound)<VolumeOffIcon/></h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/Ad7xOfi6ORM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={d1} alt='' />
                <img src={d2} alt='' />
                <img src={d3} alt='' />
                <img src={d4} alt='' />
                <img src={d5} alt='' />
                <img src={d6} alt='' />
            </div>
        </div>

        <div className='other'>
            <p><b>ToiletAdventure</b></p>
            <h6>Year 3 Unity Project 2</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/32jclWDxS64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={t1} alt='' />
                <img src={t2} alt='' />
                <img src={t3} alt='' />
                <img src={t4} alt='' />
                <img src={t5} alt='' />
                <img src={t6} alt='' />
            </div>
            <Member/>
            <h5>Download: <a href='https://drive.google.com/drive/folders/19fc2A1eCbQPfIku-KQde4eOi2emfh4GT?usp=sharing'>here</a></h5>
        </div>

        
    </PortStyled>
  )
}

const PortStyled = styled.div`
    margin-top: 3rem;
    b{
        font-size: 2.5rem;
        text-decoration-line: underline;
        
    }
    .video{
        margin: 1.5rem 0;
        text-align: center;
    }

    .image{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 2rem;
        img{
            width: 95%;
        }
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .other{
        margin-top: 3rem;
        border-top: 5px dashed var(--border-colorR);
    }

    h5{
        margin-top: 1rem;
        a{
            color: var(--primary-color);
            &:hover{
                color: #0059b8;
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
    }

    
`

export default Port