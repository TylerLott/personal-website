import React, {useState, useEffect } from 'react'
import { CarouselSection, CarouselWrapper, CarouselSlide, CarouselSlider, SlideImage, SlideContent, SlideButtons, PrevArrow, NextArrow, CarouselTitleWrapper, CarouselTitle, ContentDates } from './CarouselElements'
import FadeInSection from '../FadeIn'

const Carousel = ({ apiPath }) => {

  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(1);
  const [slides, setSlides] = useState([]);
  const length = slides.length

  async function getData() {
    const response = await fetch(apiPath)
    const res = await response.json()
    setSlides(res)
    setIsLoading(0)
  }

  useEffect(() => {
    getData()
  }, [])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) { return null; }

  return (
    <div>
      {isLoading ? <div className="loading">Loading...</div> :
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
                    <SlideImage isVisible={index === current} src={slide.image} alt={slide.alt}/>
                    {index === current && (
                      <CarouselSlider>
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
      }
    </div>
  )
}

export default Carousel
