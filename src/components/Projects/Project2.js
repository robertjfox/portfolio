import React, { useState } from 'react'
import { StackLogos } from '../'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { Fade } from 'react-reveal'

export const Project2 = () => {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      key: 1,
      content: <img src="/RevYou/mobile01.png" alt="1" />
    },
    {
      key: 2,
      content: <img src="/RevYou/mobile02.png" alt="2" />
    },
    {
      key: 3,
      content: <img src="/RevYou/mobile03.png" alt="3" />
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
          <img src="/RevYou/logo.png" alt="logo" className="logo" />
          <h3>
            A productivity application for creating and maintaining habits and
            visually tracking your progress over time.
          </h3>
          <StackLogos stack={['react', 'redux', 'mongoDB', 'firebase']} />
          <p>
            RevYou takes daily input for a set of custom habits and parses that
            data to render D3 components. This project was built alone over a
            few days for a hackathon event.
          </p>
          <div className="button-cont">
            <button>GITHUB</button>
            <button>HEROKU</button>
            <button>VIDEO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
