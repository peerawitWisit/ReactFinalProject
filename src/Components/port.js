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

import h1 from '../img/HERO/H1.png'
import h2 from '../img/HERO/H2.png'
import h3 from '../img/HERO/H3.png'
import h4 from '../img/HERO/H4.png'
import h5 from '../img/HERO/H5.png'
import h6 from '../img/HERO/H6.png'

import bomb1 from '../img/Bomberman/b1.png'
import bomb2 from '../img/Bomberman/b2.png'
import bomb3 from '../img/Bomberman/b3.png'

import s1 from '../img/SantaKiller/S1.png'
import s2 from '../img/SantaKiller/S2.png'
import s3 from '../img/SantaKiller/S3.png'
import s4 from '../img/SantaKiller/S4.png'
import s5 from '../img/SantaKiller/S5.png'
import s6 from '../img/SantaKiller/S6.png'

import m1 from '../img/MonopolyGame/m1.png'
import m2 from '../img/MonopolyGame/m2.png'
import m3 from '../img/MonopolyGame/m3.png'
import m4 from '../img/MonopolyGame/m4.png'
import m5 from '../img/MonopolyGame/m5.png'
import m6 from '../img/MonopolyGame/m6.png'
import m7 from '../img/MonopolyGame/m7.png'
import Member from './Member';
import MemberCon from './MemberCon';

const Port = () => {
  return (
    <PortStyled>
        <div className='first'>
            <p><b>F Outbreaking(Demo)</b></p>
            <h6>Final-Project with Constuct 2 (2020)</h6>
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
            <h6>Python / Final-Project (2021)</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/LA9BpjgVqF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div className='other'>
            <p><b>CatJump</b></p>
            <h6>Unity Project 1 (2021)</h6>
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
            <h6>Unity / In-Class (no sound) (2021)<VolumeOffIcon/></h6>
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
            <h6>Unity / Project 2 (2021)</h6>
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

        <div className='other'>
            <p><b>HERO</b></p>
            <h6>Unity / Final-Project (2021)</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/llh9jFpktvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={h1} alt='' />
                <img src={h2} alt='' />
                <img src={h3} alt='' />
                <img src={h4} alt='' />
                <img src={h5} alt='' />
                <img src={h6} alt='' />
            </div>
            <Member/>
            <h5>Download: <a href='https://drive.google.com/drive/folders/1VDoEjfrNP7seBnxXq9t_ufi_WXeRfXE9?usp=share_link'>here</a></h5>
        </div>

        <div className='other'>
            <p><b>Bomber Man Game (Test)</b></p>
            <h6>Internship Unity Programmer (2022)<VolumeOffIcon/></h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/qYxj7hl9XTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={bomb1} alt='' />
                <img src={bomb2} alt='' />
                <img src={bomb3} alt='' />
            </div>
        </div>

        <div className='other'>
            <p><b>Santa Killer</b></p>
            <h6>Internship Unity Programmer (2022)</h6>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/TvtI-rLTa9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='image'>
                <img src={s1} alt='' />
                <img src={s2} alt='' />
                <img src={s3} alt='' />
                <img src={s4} alt='' />
                <img src={s5} alt='' />
                <img src={s6} alt='' />
            </div>
            <h5>Download: <a href='https://drive.google.com/file/d/1wMKixGe4ojZt8fHVxz4FhV2MNwMYCVB3/view?usp=share_link'>here</a></h5>
        </div>

        <div className='other'>
            <p><b>Monopoly Game</b></p>
            <h6>Unity / practice game (2023)</h6>
            <div className='video'>
                <img src={m3} alt='' />
            </div>
            <div className='image'>
                <img src={m1} alt='' />
                <img src={m2} alt='' />
                <img src={m4} alt='' />
                <img src={m5} alt='' />
                <img src={m6} alt='' />
                <img src={m7} alt='' />
            </div>
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