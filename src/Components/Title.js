import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
  return (
    <TitleStyled>
        <h2>{title} <b><span>{span}</span></b></h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
            animation: animationRight 2s;
        }

        @keyframes animationRight{
            from{
                width: 0;
            }
            to{
                width: 6.22%;
            }
    
        }

        span{
            font-weight: 900;
            color: var(--Shadow-color);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`;

export default Title