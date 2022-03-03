import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text}) {

    return (
        <ProgressBarStyled className='Skill-section'>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width:width}} />
                </div>
            </div>
            <ProgressBarStyled/>
        </ProgressBarStyled>

        
    )
}



const ProgressBarStyled = styled.div`
    margin-right: 2rem;
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 80%;
            height: .4rem;
            background-color: var(--border-color);
            border-radius: 12px;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color);
                border-radius: 12px;

            }
        }
    }
`;

export default ProgressBar;