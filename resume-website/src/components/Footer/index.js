import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'
import FadeInSection from '../FadeIn'

const Footer = () => {

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact
              </FooterLinkTitle>
              <p>&nbsp;</p>
              <FadeInSection>
                <FooterLink href="https://www.linkedin.com/in/tyler-lott/">LinkedIn</FooterLink>
              </FadeInSection> 
              <p>&nbsp;</p>
              <FadeInSection> 
                <FooterLink href="https://github.com/TylerLott">Github</FooterLink>
              </FadeInSection>
              <p>&nbsp;</p>
              <FadeInSection>
                <FooterLink href="mailto:tylerlott0126@gmail.com">Email : TylerLott0126@gmail.com</FooterLink>
              </FadeInSection>
              <p>&nbsp;</p>
              <FadeInSection>
                <FooterLink href="tel:2084090121">Call/Text : 208-409-0121</FooterLink>
              </FadeInSection>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
