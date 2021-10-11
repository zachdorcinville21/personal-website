import React from 'react';
import styled from 'styled-components';
import linkedin from './social-icons/linkedin.png';
import github from './social-icons/github-logo.png';
import ig from './social-icons/instagram.png';
import discord from './social-icons/discord.png';


const FooterContainer = styled.div`
    width: 100%;
    height: 130px;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
    color: #fffafa;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <a className='social-link' href='https://linkedin.com/in/zachary-d' target='_blank' rel="noreferrer"><SocialIcon src={linkedin} /></a>
            <a className='social-link' href='https://github.com/zachdorcinville21' target='_blank' rel="noreferrer"><SocialIcon src={github} /></a>
            <a className='social-link' href='https://www.instagram.com/dorcinvillez/' target='_blank' rel="noreferrer"><SocialIcon src={ig} /></a>
            <a className='social-link' href='https://discord.com/channels/@me' target='_blank' rel="noreferrer"><SocialIcon src={discord} /></a>
        </FooterContainer>
    );
}



export default Footer;
