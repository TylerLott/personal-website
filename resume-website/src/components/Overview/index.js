import React from 'react'
import { OverviewContainer, OverviewBg, VideoBg, OverviewContent, OverviewH1, OverviewP } from './OverviewElements'
import Video from '../../video/video.mp4'
import FadeInSection from '../FadeIn'

const Overview = () => {
  return (
    <OverviewContainer id="overview">
      <OverviewBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </OverviewBg>
      <OverviewContent>
        <FadeInSection>
          <OverviewH1>
            Hi, my name is Tyler.
          </OverviewH1>
          <OverviewP>
            I want to work for you.
          </OverviewP>
        </FadeInSection>
      </OverviewContent>
    </OverviewContainer>
  )
}

export default Overview
