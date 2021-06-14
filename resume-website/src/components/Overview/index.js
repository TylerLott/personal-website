import React from 'react'
import { OverviewContainer, OverviewBg, VideoBg, OverviewContent, OverviewH1, OverviewP } from './OverviewElements'
import Video from '../../video/video.mp4'

const Overview = () => {
  return (
    <OverviewContainer id="overview">
      <OverviewBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </OverviewBg>
      <OverviewContent>
        <OverviewH1>
          Hi, My name is Tyler.
        </OverviewH1>
        <OverviewP>
          I want to work for you.
        </OverviewP>
      </OverviewContent>
    </OverviewContainer>
  )
}

export default Overview
