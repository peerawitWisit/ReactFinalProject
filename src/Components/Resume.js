import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ResumeItem from './ResumeItem';
import SmallTitle from './SmallTitle';
import Title from './Title';
import SchoolIcon from "@material-ui/icons/School"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={"Personal History"} span={"Personal History"} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={"Education"} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={"2013 - 2015"}
                        title={"Horwang School"}
                        subTitle={"Middle school"}
                        text={""} 
                    />
                    <ResumeItem
                        year={"2016 - 2018"}
                        title={"Horwang School"}
                        subTitle={"High School"}
                        text={"Mathematics-Science"} 
                    />
                    <ResumeItem 
                        year={"2019 - 2022"} 
                        title={"Thai-Nichi Institute of Technology"}
                        subTitle={"bachelor's degree"}
                        text={"Information Tecnology(IT)"} 
                    />
                    {/* <ResumeItem 
                        year={} 
                        title={}
                        subTitle={}
                        text={} 
                    /> */}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={"Experience"} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={"1 JUN 2022 - 30 SEP 2022"} 
                        title={"Innova Interactive Studio"}
                        subTitle={"Internship Unity Programer"}
                        text={""} 
                    />
                    { <ResumeItem 
                        year={'13 MAR 2023 - 12 MAY 2023'} 
                        title={'Higashikawa Arts Exchange center'}
                        subTitle={'Higashikawa Short-Term Japanese Language Course'}
                        text={'2 months'} 
                    /> }
                    {/* <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    /> */}
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`

    .small-title{
        padding-bottom: 2rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 3px solid var(--border-colorR);
    }

`;
export default Resume
