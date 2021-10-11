import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import downArrow from './images/down-arrow-white.svg';
import { animateScroll as scroll } from 'react-scroll';

import './Welcome.css';

const Text = styled.div`
    font-weight: normal;
    color: #FFFAFA;
`;

const fadeInTitle = () => {
    gsap.to('#welcome-txt', { autoAlpha: 1, duration: 2, });
}

const slideProfession = () => {
    gsap.to('#profession', { autoAlpha: 1, x: 50, duration: 1, })
}

const Welcome = () => {
    useEffect(() => {
        gsap.delayedCall(0.5, fadeInTitle);
        gsap.delayedCall(1.5, slideProfession);
    }, []);

    return (
        <div className='welcome-container'>
            <div className='greeting'>
                <Text id='welcome-txt' as="h1">Welcome, I'm Zachary</Text>
                <Text id='profession' as="p">Software Engineer | Web Developer</Text>
            </div>

            <div className='see-more' onClick={() => scroll.scrollTo(900)}>
                <Text as="p">See more</Text>
                <img src={downArrow} style={{ width: '50px' }} alt='down arrow' />
            </div>
        </div>
    );
}



export default Welcome;
