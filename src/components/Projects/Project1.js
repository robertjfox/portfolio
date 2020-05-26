import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import Carousel from 'react-spring-3d-carousel'
import ModalVideo from 'react-modal-video'
import { config } from 'react-spring'
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

export const Project1 = () => {
  const [slide, setSlide] = useState(0)
  const [open, setOpen] = useState(false)

  const slides = [
    {
      key: 1,
      content: <img src="FitMinded/mobile01.png" alt="1" />,
    },
    {
      key: 2,
      content: <img src="FitMinded/mobile02.png" alt="2" />,
    },
    {
      key: 3,
      content: <img src="FitMinded/mobile03.png" alt="3" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) }
  })

  return (
    <div id="project-container" className="fit-minded">
      <Fade up>
        <div id="project" className="fit-minded">
          <div className="left">
            <Carousel
              goToSlide={slide}
              slides={slides}
              config={config.gentle}
              showNavigation={false}
              offsetRadius={1}
            />
          </div>
          <div className="right">
            <div className="title">
              <h1>
                <i>FitMinded</i>
              </h1>
              <div className="line"></div>
              <div className="link-cont">
                <a
                  href={`https://github.com/robertjfox/fit-minded`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="icons/github.png" alt="github" />
                </a>
                <div>
                  <div className="video-modal">
                    <ModalVideo
                      channel="youtube"
                      isOpen={open}
                      videoId="7fnAdXZ0UAQ"
                      onClose={() => setOpen(false)}
                    />
                  </div>
                  <img
                    src="icons/youtube.png"
                    alt="youtube"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
            </div>
            <p className="description">
              FitMinded is a platform that connects people with similar athletic
              interests. It takes advantage of a non-relational database to
              efficiently analyze user relationships. I was responsible for
              developing the database schema, the matching algorithm, the
              recommendation map, and the UX/UI.
            </p>
            <div className="technologies">
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>Firebase</p>
              <p>Google Places API</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
