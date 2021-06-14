import React, {useState, useRef, useEffect} from 'react'
import { CarouselSection, CarouselWrapper, CarouselSlide, CarouselSlider, SlideImage, SlideContent, SlideButtons, PrevArrow, NextArrow } from './CarouselElements'


const Carousel = ({ slides }) => {

  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) { return null; }

  return (
    <CarouselSection id={slides[0].type}>
      <CarouselWrapper>
        {slides.map((slide, index) => {
          return (
            <CarouselSlide key={index}>
              {index === current && (
                <CarouselSlider>
                  <SlideImage src={slide.image} alt={slide.alt}/>
                  <SlideContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                  </SlideContent>
                </CarouselSlider>
              )}
            </CarouselSlide>
          )
        })}
        <SlideButtons>
          <PrevArrow onClick={prevSlide}/>
          <NextArrow onClick={nextSlide}/>
        </SlideButtons>
      </CarouselWrapper>
    </CarouselSection>
  )
}

export default Carousel
