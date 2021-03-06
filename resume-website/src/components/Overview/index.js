import React, {useState, useEffect} from 'react'
import { OverviewContainer, OverviewBg, VideoBg, OverviewContent, OverviewH1, OverviewP } from './OverviewElements'
import FadeInSection from '../FadeIn'

const Overview = ({apiPath}) => {

  const [isLoading, setIsLoading] = useState(1);
  const [info, setInfo] = useState(0);

  async function getData() {
    const response = await fetch(apiPath)
    const res = await response.json()
    setInfo(res)
    setIsLoading(0)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {isLoading ? <div className="loading">Loading...</div> :
        <OverviewContainer id="overview">
          <OverviewBg>
            <VideoBg dangerouslySetInnerHTML={{ __html: `
              <video
                class="bg-video"
                loop
                muted
                autoplay
                playsinline
                src="videos/video.mp4"
                type="video/mp4"
              />
            ` }} />
          </OverviewBg>
          <OverviewContent>
            <FadeInSection>
              <OverviewH1>
                {info.title}
              </OverviewH1>
              <OverviewP>
                {info.description}
              </OverviewP>
            </FadeInSection>
          </OverviewContent>
        </OverviewContainer>
      }
    </div>
  )
}

export default Overview
