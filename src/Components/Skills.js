import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import ComputerIcon from '@material-ui/icons/Computer';
import SmallTitle from './SmallTitle';

function Skills() {
    
    const computer = <ComputerIcon/>
    
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <SmallTitle icon={computer} title={"Computer Skills"} />
                    <div className="skills">
                        <ProgressBar 
                            title={'C#'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'SQL'}
                            width={'55%'}
                            text={'55%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'45%'}
                            text={'45%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'45%'}
                            text={'45%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        margin-top: 2rem;
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