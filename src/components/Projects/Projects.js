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
                        imgLink="https://sticnuru.sirv.com/Website%20images/sayhey.png"
                        title="sayhey"
                        description="Real time chat application built with React, Node, Express, and Socket.IO"
                        githubLink="https://github.com/zachdorcinville21/sayhey"
                        projLink="https://sayhey.netlify.app"
                    />
                </div>
                <div className='project'>
                    <Project
                        imgLink="https://sticnuru.sirv.com/Website%20images/pandemic-intel.png"
                        title="Pandemic Intel"
                        description=" View COVID-19 statistics for every state, along with where to get tested. Click to view."
                        githubLink="https://github.com/zachdorcinville21/covid-intel"
                        projLink={"https://pandemicintel.live"}
                    />
                </div>
            </div>
        </div>
    );
}


export default Projects;
