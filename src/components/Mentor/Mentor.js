import React, { useEffect } from 'react';
import gsap from 'gsap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import teaching1 from './images/teach.jpg';
import teaching2 from './images/teach2.jpg';
import mentor1 from './images/mentor.jpg';
import mentor2 from './images/mentor2.jpg';
import mentor from './images/mentor.svg';

import './Mentor.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const fadeInHeader = (selector, trigger) => {
    gsap.to(selector, {
        autoAlpha: 1,
        scrollTrigger: { trigger: trigger },
        duration: 1,
    });
}

const slideCarousel = (selector, trigger) => {
    gsap.to(selector, {
        autoAlpha: 1,
        translateY: -50,
        scrollTrigger: { trigger: trigger },
        duration: 1,
    });
}

const Text = styled.div`
    font-weight: normal;
    color: #FFFAFA;
`;

const Mentor = () => {

    useEffect(() => {
        gsap.delayedCall(1, fadeInHeader, ['.mentor-heading', '.mentor-heading']);
        slideCarousel('.carousel', '.carousel');
    }, []);

    return (
        <div className='mentor-container'>
            <div className='mentor-heading'>
                <img src={mentor} alt='thinking icon' style={{ width: '100px', height: '100px', }} />
                <Text as='h1'>I also mentor.</Text>
            </div>
            <div className='carousel'>
                <Carousel
                    autoPlay
                    ssr
                    infinite
                    keyBoardControl
                    swipeable
                    showDots
                    draggable={false}
                    responsive={responsive}
                    slidesToSlide={1}
                    transitionDuration={500}
                    containerClass="carousel"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <img className='carousel-img' src={mentor2} alt='mentorimg' />
                    <img className='carousel-img' src={mentor1} alt='mentorimg' />
                    <img className='carousel-img' src={teaching1} alt='teachingimg' />
                    <img className='carousel-img' src={teaching2} alt='teachingimg' />
                </Carousel>
            </div>
        </div>
    );
}


export default Mentor;
