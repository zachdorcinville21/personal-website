import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import gsap from 'gsap';

import './Contact.css';
import Nav from '../Nav/Nav';
import check from './images/check.svg';
import emailIcon from './images/email.svg';

init("user_4gGAJTUE5UFmqkyzrNtBd");

const Text = styled.div`
    color: #fffafa;
    font-weight: normal;
`;

const Input = styled.input`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    margin-bottom: 20px;
    background-color: #fffafa;

    &:focus {
        outline: none;
    }
`;

const MsgInput = styled.textarea`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    margin-bottom: 20px;
    background-color: #fffafa;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    background-color: #000000;
    color: #fffafa;
    font-weight: bold;
    transition: ease 0.2s;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 1px 5px 2px #000000; 
    }

    &:focus {
        outline: none;
    }
`;


const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        formSubmitted: false,
    });

    const handleSubmit = e => {
        e.preventDefault();
        const { email, subject, message } = state;
        let templateParams = {
            from_name: email,
            to_name: 'zdorcinville@gmail.com',
            subject: subject,
            message: message,
        }
        emailjs.send(
            'website-email-form',
            'template_y4m89vi',
            templateParams,
            'user_4gGAJTUE5UFmqkyzrNtBd',
        )
        resetForm();
        setState({ formSubmitted: true });
    }

    const resetForm = () => {
        setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    const handleChange = (param, e) => {
        setState({ [param]: e.target.value });
    }

    const fadeInTitle = selector => {
        gsap.to(selector, { autoAlpha: 1, duration: 1 });
    }

    useEffect(() => {
        gsap.delayedCall(0.3, fadeInTitle, ['#contact-heading']);
    }, []);

    return (
        <div className='contact-container'>
            <Nav isHome={false} />
            <div className='contact-innerContainer'>
                <Text id='contact-heading' as='h1'><img src={emailIcon} style={{ width: '50px', height: '50px', position: "relative", top: '15px', right: '5px' }} alt='mail' />Get in touch</Text>
                <div>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <Input placeholder='Name' type='text' onChange={e => handleChange('name', e)} value={state.name} required />
                        <Input placeholder='Email' type='email' onChange={e => handleChange('email', e)} value={state.email} required />
                        <Input placeholder='Subject' type='text' onChange={e => handleChange('subject', e)} value={state.subject} required />
                        <MsgInput placeholder='Message' onChange={e => handleChange('message', e)} value={state.message} required />
                        <SubmitButton type='submit'>Send</SubmitButton>
                    </form>
                    {state.formSubmitted && <div style={{ textAlign: 'center', width: '100%' }}>
                        <Text as='h3'><img src={check} style={{ width: '50px', position: 'relative', top: '18px', right: '5px' }} alt='check mark' /> Thank you for reaching out</Text>
                    </div>}
                </div>
            </div>
        </div>
    );
}


export default Contact;
