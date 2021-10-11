import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

import './Nav.css';

const NavContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: ${props => props.color};
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    transition: background-color 0.4s ease-out;
`;

const NavItem = styled.div`
    font-family: Corbert;
    color: #FFFAFA;
    margin-left: 25px;
`;

const Logo = styled.div`
    width: 50px;
    height: 45px;
    position: relative;
    bottom: 23px;
    left: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const Nav = ({ isHome }) => {
    const [navColor, setColor] = useState('');
    const [open, setOpen] = useState(false);


    useEffect(() => {
        document.addEventListener('scroll', () => {
            const color = window.scrollY < 60 ? '' : '#000000';
            setColor(color);
        });
    }, []);

    return (
        <NavContainer color={isHome ? navColor : '#000000'}>
            <Logo onClick={() => scroll.scrollToTop()}><p id='zd-txt'>Z D</p></Logo>
            {
                window.screen.width > 480 ?
                    <div className='hyperlinks'>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fffafa' }}><NavItem as="p">Home</NavItem></Link>
                        <Link to='/experience' style={{ textDecoration: 'none', color: '#fffafa' }}><NavItem as="p">Experience</NavItem></Link>
                        <Link to='/contact' style={{ textDecoration: 'none', color: '#fffafa' }}><NavItem as="p">Contact</NavItem></Link>
                    </div>
                    :
                    <div>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                    </div>
            }
        </NavContainer>
    );
}


export default Nav;
