import styled from 'styled-components'

export const OverviewContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
    z-index: 2;
  }
`

export const OverviewBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const OverviewContent = styled.div`
  z-index:3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OverviewH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width:1000px){
    font-size: 40px;
  }

  @media screen and (max-width:480px){
    font-size: 32px;
  }
`

export const OverviewP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width:1000px){
    font-size: 20px;
  }

  @media screen and (max-width:480px){
    font-size: 18px;
  }
`