import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'


function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'80%'}
                            text={'80%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;