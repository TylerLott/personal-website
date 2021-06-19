import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
`

export const InfoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(120deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 100%), linear-gradient(120deg, rgba(0,0,0,0.3) 0%, transparent 100%);

  h1{
    padding: 2rem 3rem;
    text-transform: uppercase;
    color: #fff;
    font-size: clamp(1.5rem, 6vw, 4rem);
    font-weight: 400;
    letter-spacing: 0.4em;
  }
`

export const InfoHeader = styled.div`
  z-index:3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoContent = styled.ul`
  position: relative;
  list-style: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(90% - 70px);
  height: calc(100% - 300px);
  color: #fff;

  h1 {
    font-size: clamp(0.5rem, 8vw, 1rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  }
`

export const InfoWrapper = styled.div`
`

export const Info = styled.nav`
  color: #fff;

  &.active {
    color: red;
  }
`

export const InfoLink = styled.a`
  color: #fff;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0 0.75rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
  }
`

export const HoverBox = styled.div`
  position: relative;
  visibility: ${({isHovering}) => (isHovering ? 'visible' : 'hidden')};
`

export const InfoMore = styled.div``