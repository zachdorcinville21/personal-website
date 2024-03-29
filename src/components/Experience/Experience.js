import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import gsap from 'gsap';
import styled from 'styled-components';
import space from './images/space.svg';
import Skill from './Skill';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Experience.css';

import js from './images/js.svg';
import reactIcon from './images/react.svg';
import nodeIcon from './images/nodejs.svg';
import ts from './images/typescript.svg';
import html from './images/html-5.svg';
import css from './images/css.svg';
import sql from './images/mysql.svg';
import aws from './images/aws.svg';
import code from './images/code.svg';
import resume from './images/resume.svg';
import mongo from './images/mongo.svg';
import graphql from './images/graphql.svg';

const Text = styled.div`
    font-weight: normal;
    color: #fffafa;
    opacity: 0;
`;

const Space = styled.img`
    position: fixed;
    left: 0;
    width: 300px;
    height: 300px; 
    bottom: 0;
`;

const fadeTitle = selector => {
    gsap.to(selector, { autoAlpha: 1, duration: 1, });
}

const showSkills = selector => {
    ScrollTrigger.batch(selector, {
        interval: 0.7,
        onEnter: batch => gsap.to(batch, { autoAlpha: 1, translateY: 50, ease: 'bounce', stagger: { each: 0.25 }, duration: 1 })
    });
}

const skills = [
    { name: 'JavaScript', icon: js },
    { name: 'Typescript', icon: ts },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'MongoDB', icon: mongo },
    { name: 'GraphQL', icon: graphql },
    { name: 'HTML5', icon: html },
    { name: 'CSS', icon: css },
    { name: 'SQL', icon: sql },
    { name: 'AWS', icon: aws },
];

const Experience = () => {
    useEffect(() => {
        gsap.delayedCall(0.5, fadeTitle, ['#exp-heading']);
        gsap.delayedCall(0.7, showSkills, ['.skill']);
    }, []);

    return (
        <div className='exp-container'>
            <Nav isHome={false} />
            <div className='exp-innerContainer'>
                <div className='skills-container'>
                    <Text id='exp-heading' as='h1'><img src={code} style={{ width: '50px' }} alt='code icon' /> What I use</Text>
                    <div className='skills'>
                        {skills.map((skill, idx) => (
                            <div className='skill' key={idx}><Skill name={skill.name} icon={skill.icon} /></div>
                        ))}
                    </div>
                </div>
                <div className='resume'>
                    <img src={resume} style={{ width: '80px', height: '80px', }} alt='resume icon' />
                    <a
                        href="https://sticnuru.sirv.com/Website%20images/Resume-Zachary%20Dorcinville.pdf"
                        target="_blank"
                        rel="noreferrer"
                        id='resume-link'
                        style={{ textDecoration: 'none', color: '#fff', fontSize: 28 }}
                    >
                        Resume
                    </a>
                </div>
            </div>
            <Space id='space-svg' src={space} />
        </div>
    );
}


export default Experience;
