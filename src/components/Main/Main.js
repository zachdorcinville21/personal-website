import React from 'react';
import styled from 'styled-components';

import Welcome from '../Welcome/Welcome';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Mentor from '../Mentor/Mentor';
import Footer from '../Footer/Footer';

import './Main.css';

const Line = styled.hr`
    overflow: visible;
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    margin-top: 150px;
    width: 75%;

    &:before {
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 20px;
    }
`;

const Main = () => {
    return (
        <div className='main-container'>
            <Nav isHome />
            <Welcome />
            <Projects />
            <Line />
            <Mentor />
            <Footer />
        </div>
    );
}


export default Main;
