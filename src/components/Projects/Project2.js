import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import Carousel from 'react-spring-3d-carousel'
import ModalVideo from 'react-modal-video'
import { config } from 'react-spring'
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

export const Project2 = () => {
  const [slide, setSlide] = useState(0)
  const [open, setOpen] = useState(false)

  const slides = [
    {
      key: 1,
      content: <img src="/RevYou/mobile03.png" alt="1" />
    },
    {
      key: 2,
      content: <img src="/RevYou/mobile01.png" alt="2" />
    },
    {
      key: 3,
      content: <img src="/RevYou/mobile02.png" alt="3" />
    },
    {
      key: 4,
      content: <img src="/RevYou/mobile04.png" alt="4" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) }
  })

  return (
    <div id="project-container" className="rev-you">
      <Fade up>
        <div id="project" className="rev-you">
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
                <i>RevYou</i>
              </h1>
              <div className="line"></div>
              <div className="link-cont">
                <a
                  href={`https://github.com/robertjfox/RevYou`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/github.png" alt="github" />
                </a>
                <a
                  href={`https://www.revyoustack.herokuapp.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/heroku.png" alt="heroku" />
                </a>
                <div>
                  <ModalVideo
                    channel="youtube"
                    isOpen={open}
                    videoId="nYFfBlUGRO0"
                    onClose={() => setOpen(false)}
                  />
                  <img
                    src="/icons/youtube.png"
                    alt="youtube"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
            </div>
            <p className="description">
              RevYou is a productivity app for creating and maintaining habits.
              It takes daily input for a set of custom habits and parses that
              data to render D3 components which allow users to visualize their
              progress. This project was built independently over a few days for
              a hackathon event.
            </p>
            <div className="technologies">
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
              <p>D3JS</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
