import React, {useState } from 'react'
import { CarouselSection, CarouselWrapper, CarouselSlide, CarouselSlider, SlideImage, SlideContent, SlideButtons, PrevArrow, NextArrow, CarouselTitleWrapper, CarouselTitle, ContentDates } from './CarouselElements'
import FadeInSection from '../FadeIn'
import Image from '../../images/UtahState.jpg'

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
        <CarouselTitleWrapper>
          <FadeInSection>
            <CarouselTitle>{slides[0].type}</CarouselTitle>
            </FadeInSection>
        </CarouselTitleWrapper>
        <CarouselWrapper>
          {slides.map((slide, index) => {
            return (
              <CarouselSlide key={index}>
                {index === current && (
                  <CarouselSlider>
                    {/* <SlideImage src={slide.image} alt={slide.alt}/> */}
                    <SlideImage src={Image} alt={slide.alt}/>
                    <SlideContent>
                      <FadeInSection>
                        <ContentDates >{slide.startMonth} {slide.startYear} - {slide.endMonth} {slide.endYear}</ContentDates>
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        <ul>
                          {slide.bullets.map(( bullet ) => {
                            return (
                              <li key={bullet.id}>{bullet.info}</li>
                            )
                          })}
                        </ul>
                      </FadeInSection>
                    </SlideContent>
                  </CarouselSlider>
                )}
              </CarouselSlide>
            )
          })}
          <SlideButtons>
            <FadeInSection>
              <PrevArrow onClick={prevSlide}/>
              <NextArrow onClick={nextSlide}/>
            </FadeInSection>
          </SlideButtons>
        </CarouselWrapper>
    </CarouselSection>
    
  )
}

export default Carousel
