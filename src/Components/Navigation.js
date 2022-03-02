import React from 'react'
import styled from 'styled-components'
import avatar from '../img/profile2.jpg'
import { NavLink} from 'react-router-dom' 

const Navigation = () => {

  return (
    <NavigationStyled>
        <div className='avatar'>
            <img src={avatar} alt='' />
        </div>
        <ul className='nav-items'>
            <li className='nav-item'>
                <NavLink to='/' exact activeClassName='active'>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/about' activeClassName='active'>About Me</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/resume' activeClassName='active'>Resume</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/portfolio' activeClassName='active'>Portfolio</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/product' activeClassName='active'>Product</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/cart' activeClassName='active'>Cart</NavLink>
            </li>
        </ul>
        <footer className='footer'>
            <p>@2022 Peerawit Wisitsurawong</p>
        </footer>
    </NavigationStyled>
  )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    padding-bottom: 1rem;

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        


        .active{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a{
                display: block;
                padding: .2rem 0;
                position: relative;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    z-index: 3;
                    opacity: 0.21;
                    transition: All 0.4s cubic-bezier(.59,.03,.43,.83);
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 0.9rem;
            display: block;
            text-align: center;
        }

};

    
`

export default Navigation