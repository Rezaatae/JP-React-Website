import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon,
     NavMenue, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={require('../../images/logo-small-white.svg')} alt="logo" /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenue>
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="section1"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Section 1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="section2"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}>Section 2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenue>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>

    );
};

export default Navbar;
