import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const toggleBottom = () => {
        scroll.scrollToBottom();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Tyler Lott</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="skills"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="education"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="achievements"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Achievements</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="publications"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Publications</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {/* For React router - use if decide to make contact page */}
                        {/* <NavBtnLink to='/contact'>Contact</NavBtnLink> */}
                        {/* <NavBtnLink href="mailto:tylerlott0126@gmail.com" onClick={toggleBottom}>Contact</NavBtnLink> */}
                        <NavBtnLink onClick={toggleBottom}>Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
