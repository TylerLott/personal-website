import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import Overview from '../components/Overview'
// import Image1 from '../images/Image1.svg'
// import Image2 from '../images/Image2.svg'
import resumeData from './resumeData'

function Home() {

  return (
    <>
      <Overview apiPath={'/api/overview'}/>
      <InfoSection apiPath={'/api/skills'}/>
      <Carousel apiPath={'/api/experience'}/>
      <Carousel apiPath={'/api/education'}/>
      <Carousel apiPath={'/api/projects'}/>
      <InfoSection apiPath={'/api/achievements'}/>
      <InfoSection apiPath={'/api/publications'}/>
      <Footer />
    </>
  )
}

export default Home
