import styled, { css } from 'styled-components/macro'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

export const CarouselSection = styled.section`
  height: calc(100vh - 80px);
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`

export const CarouselTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
`

export const CarouselTitle = styled.h1`
  padding: 2rem 3rem;
  text-transform: uppercase;
  color: #000;
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: 400;
  letter-spacing: 0.4em;
  
`

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const CarouselSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: calc(100vh - 80px);
`

export const CarouselSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: top;
  justify-content: left;
  padding: 8rem 10vw;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: calc(100vh - 80px);
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%,);
  }
`

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  object-fit: cover;
  opacity: ${({isVisible}) => (isVisible ? '0.2' : '0')};
  transition: 1.5s ease all;
  z-index: 1;
`

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  max-width: 1600px;
  width: calc(100% - 100px);
  

  h1 {
    font-size: clamp(1rem, 5vw, 3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    text-align: left;
    margin-bottom: 0.8rem;
    color: #495057;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    padding-top: 50px;
    font-size: clamp(0.6rem, 3vw, 2rem);
    color: #343A40;
  }
  ul {
    padding: 10px 40px;
    font-size: clamp(0.6rem, 2vw, 1.75rem);
    color: #343A40;
  }

  @media screen and (max-width: 700px){
    width: 100%;
    padding-top: 0;
    ul{
      padding-left: 0;
    }
    p{
      padding-top: 20px;
    }
  }
`

export const ContentDates = styled.h2`
  font-size: clamp(0.5rem, 2vw, 1rem);
  text-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  color: #EA5D5F;
  text-transform: uppercase;
  text-align: left;
  font-weight: 600;
  letter-spacing: 2px;
`

export const SlideButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #495057;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`