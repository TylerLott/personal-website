import React, {useState, useEffect} from 'react'
import { Nav, Tab, Row, Col } from 'react-bootstrap'
import { InfoContainer, InfoBg, InfoHeader } from './InfoSectionElements'

import './InfoSection.css'
import 'bootstrap/dist/css/bootstrap.css';
import FadeInSection from '../FadeIn';

const InfoSection = ({ apiPath }) => {

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
      {isLoading ? <div>Loading... </div> : 
      <InfoContainer id={info[0].type}>
          <InfoBg>
            <FadeInSection><h1>{info[0].type}</h1></FadeInSection>
          </InfoBg>
        <InfoHeader>
        </InfoHeader>
          <Tab.Container id="tab-container" defaultActiveKey={info[0].id}>
            <Row className="tab-row">
              <Col className="nav-col">
                <Nav variant="pills" className="flex-column">
                  <FadeInSection>
                  {info.map((infoBit) => {
                    return (
                      <Nav.Item key={infoBit.id}>
                        <Nav.Link eventKey={infoBit.id}>{infoBit.title}</Nav.Link>
                      </Nav.Item>
                    )
                  })}
                  </FadeInSection>
                </Nav>
              </Col>
              <Col className="tab-container">
              <FadeInSection>
                <Tab.Content>
                {info.map((infoBit) => {
                    return (
                      <Tab.Pane key={infoBit.id} eventKey={infoBit.id}>
                        <h1>{infoBit.title}</h1>
                        <p>{infoBit.description}</p>
                        <ul>
                          {infoBit.bullets.map((infoBullet) => {
                            return(<li key={infoBullet.id}>{infoBullet.info}</li>)
                          })}
                        </ul>
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
                </FadeInSection>
              </Col>
            </Row>
          </Tab.Container>
      </InfoContainer> }
    </div>
  )
}

export default InfoSection
