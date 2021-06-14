import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import Image1 from '../images/Image1.svg'
import Image2 from '../images/Image2.svg'
import resumeData from './resumeData'

function Home() {


  return (
    <>
      <Overview />
      <Carousel slides={resumeData.skills}/>
      <Carousel slides={resumeData.experience}/>
      <Carousel slides={resumeData.education}/>
      <Carousel slides={resumeData.projects}/>
      <Carousel slides={resumeData.achievements}/>
      <Carousel slides={resumeData.publications}/>
      <Footer />
    </>
  )
}

export default Home
