import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background: #000;
`

export const FooterWrap = styled.div`
  padding:48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  margin: 16px;
  text-align: center;
  width: 500px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #EA5D5F;
  font-weight: 200;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
`

export const FooterLinkReact = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 24px;

  &:hover {
    color: #EA5D5F;
    transition: 0.3s ease-out;
  }
`

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 18px;

  &:hover {
    color: #EA5D5F;
    transition: 0.3s ease-out;
  }
`