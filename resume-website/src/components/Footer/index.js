import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

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
                <FooterLink to="/contact">LinkedIn</FooterLink>
                <FooterLink to="/contact">Github</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact
              </FooterLinkTitle>
                <FooterLink to="/contact">LinkedIn</FooterLink>
                <FooterLink to="/contact">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact
              </FooterLinkTitle>
                <FooterLink to="/contact">LinkedIn</FooterLink>
                <FooterLink to="/contact">Github</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact
              </FooterLinkTitle>
                <FooterLink to="/contact">LinkedIn</FooterLink>
                <FooterLink to="/contact">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
