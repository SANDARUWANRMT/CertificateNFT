import React from 'react';
import tw from 'twin.macro';
import { NavLinks, NavLink } from 'components/headers/light';

import logoImageSrc from "../images/CFT_logo.png";
const FixedNavbar = tw.nav`fixed top-0 left-0 right-0 bg-white z-50`;
const NavbarContainer = tw.div`max-w-screen-2xl mx-auto flex items-center justify-between py-4 px-8`;
const NavLinksContainer = tw.div`flex items-center space-x-8`;

const Navbar = () => (
  <FixedNavbar>
    <NavbarContainer>
    <img src={logoImageSrc}alt="Logo" style={{width:"100px"}}/>
      <NavLinksContainer>
        <NavLinks>
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/tutors">Tutors</NavLink>
          <NavLink href="/#howitworks">How it works</NavLink>
          <NavLink href="/#aboutus">About us</NavLink>
        </NavLinks>
      </NavLinksContainer>
      <NavLinksContainer>
       

      </NavLinksContainer>
    </NavbarContainer>
  </FixedNavbar>
);

export default Navbar;
