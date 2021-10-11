import React from 'react';
import styled from 'styled-components';


const SkillContainer = styled.div`
    padding:25px;
    background-color: #000000;
    border-radius: 16px;
    width: 170px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: ease 0.2s;
    position: relative;
    bottom: 50px;
    margin-bottom: 40px;

    &:hover {
        transform: scale(1.1);
    }
`;

const Skill = ({ name, icon }) => {
    return (
        <SkillContainer>
            <img src={icon} style={{ width: '50px' }} alt='skill icon' />
            <p style={{ color: '#fffafa', marginLeft: '10px' }}>{name}</p>
        </SkillContainer>
    );
}


export default Skill;
