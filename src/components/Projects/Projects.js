import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project from '../Project/Project';
import ProjectsHeader from './ProjectsHeader';
import styled from 'styled-components';

import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const showProjects = selector => {
    ScrollTrigger.batch(selector, {
        interval: 1,
        onEnter: batch => gsap.to(
            batch,
            {
                autoAlpha: 1,
                stagger: { each: 0.30 },
                scrollTrigger: { trigger: '.project-cards' },
                duration: 1
            })
    });
}

const animateTitle = selector => {
    gsap.to(selector, { autoAlpha: 1, scrollTrigger: { trigger: '#projects-title' }, duration: 1 });
}

const AppStoreLink = styled.a`
    color: steelblue;
    text-decoration: none;
`;

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
                        imgLink="https://sticnuru.sirv.com/go-native-images/roberto-nickson-_em5tYXuOQc-unsplash.jpg"
                        title="Gotham Oracle"
                        description={
                            <div>
                                A digital guide for NYC experiences. Also available on the{' '}
                                <AppStoreLink
                                    href='https://apps.apple.com/us/app/gotham-oracle/id1617227132'
                                    target='_blank'
                                    rel='no-referrer'
                                >
                                    App Store.
                                </AppStoreLink>
                            </div>
                        }
                        githubLink="https://github.com/Gotham-Oracle/gotham-oracle-web"
                        projLink="https://gothamoracle.com"
                    />
                </div>
                <div className='project'>
                    <Project
                        imgLink="https://sticnuru.sirv.com/Website%20images/guerrillabuzz-blockchain-pr-agency-URTdM8lVSDg-unsplash.jpg"
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
