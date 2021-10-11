import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import gsap, { Linear } from 'gsap';
import styled from 'styled-components';
import gear from './images/gear-gray.svg';

import './Projects.css';

const Title = styled.h1`
    font-weight: normal;    
    color: #FFFAFA;
`;

const fadeInTitle = selector => {
    gsap.to(selector, { autoAlpha: 1, scrollTrigger: { trigger: selector }, duration: 1 });
}


const ProjectsHeader = () => {
    useEffect(() => {
        fadeInTitle('.projects-header');
    }, [])

    return (
        <div className='projects-header'>
            <Controller>
                <Scene duration={500}>
                    {progress => (
                        <Timeline totalProgress={progress}
                            target={
                                <img id='gear-svg' src={gear} alt='gear icon' style={{ width: '50px' }} />
                            }
                        >
                            <Tween
                                to={{ rotation: 360, ease: Linear.easeNone, scrollTrigger: { trigger: '.projects-container', scrub: 0.2 } }}
                            />
                        </Timeline>
                    )}
                </Scene>
            </Controller>

            <Title>I build stuff.</Title>
        </div>
    )
}


export default ProjectsHeader;
