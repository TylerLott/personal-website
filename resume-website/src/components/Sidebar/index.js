import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import {animateScroll as scroll} from 'react-scroll';

const Sidebar = ({isOpen, toggle}) => {

  const toggleBottom = () => {
    scroll.scrollToBottom();
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="skills" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="experience" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="education" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Education
          </SidebarLink>
          <SidebarLink to="projects" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="achievements" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Achievements
          </SidebarLink>
          <SidebarLink to="publications" 
          smooth={true} 
          duration={500}
          spy={true}
          exact='true'
          offset={-80} onClick={toggle}>
            Publications
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggleBottom}>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
