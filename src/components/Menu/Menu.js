import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        Home
      </Link>
      <Link to="/experience">
        Experience
        </Link>
      <Link to="/contact">
        Contact
        </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}


export default Menu;
