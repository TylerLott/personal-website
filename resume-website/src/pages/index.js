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
      <Overview />
      <InfoSection info={resumeData.skills}/>
      <Carousel slides={resumeData.experience}/>
      <Carousel slides={resumeData.education}/>
      <Carousel slides={resumeData.projects}/>
      <InfoSection info={resumeData.achievements}/>
      <InfoSection info={resumeData.publications}/>
      <Footer />
    </>
  )
}

export default Home
