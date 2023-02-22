import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project from '../Project/Project';
import ProjectsHeader from './ProjectsHeader';

import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const showProjects = selector => {
    ScrollTrigger.batch(selector, {
        interval: 1,
        onEnter: batch => gsap.to(batch, { autoAlpha: 1, stagger: { each: 0.30 }, scrollTrigger: { trigger: '.project-cards' }, duration: 1 })
    });
}

const animateTitle = selector => {
    gsap.to(selector, { autoAlpha: 1, scrollTrigger: { trigger: '#projects-title' }, duration: 1 });
}

const Projects = () => {
    useEffect(() => {
        animateTitle('#proj-title-txt');
        showProjects(".project");
    }, []);

    return (
        <div className='projects-container'>
            <ProjectsHeader />
            <div className='project-cards'>
                <div className='project'>
                    <Project
                        imgLink="https://sticnuru.sirv.com/go-images/GO%20Transparent.png"
                        title="Gotham Oracle"
                        description="A single page application to help plan your day (or night) in the Big Apple."
                        githubLink="https://github.com/Gotham-Oracle/gotham-oracle-web"
                        projLink="https://gothamoracle.com"
                    />
                </div>
                <div className='project'>
                    <Project
                        imgLink="https://sticnuru.sirv.com/sol-hub-imgs/Screen%20Shot%202022-01-20%20at%202.11.26%20PM.png"
                        title="$SOLhub"
                        description="A personal Solana dashboard where you can message other Phantom wallets and view your NFT collection."
                        githubLink="https://github.com/zachdorcinville21/sol-hub"
                        projLink="https://solhub.app"
                    />
                </div>
            </div>
        </div>
    );
}


export default Projects;
