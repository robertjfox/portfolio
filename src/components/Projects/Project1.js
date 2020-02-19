import React, { useState } from 'react'
import { StackLogos } from '../'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { Fade } from 'react-reveal'

export const Project1 = () => {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      key: 1,
      content: <img src="/FitMinded/mobile01.png" alt="1" />
    },
    {
      key: 2,
      content: <img src="/FitMinded/mobile02.png" alt="2" />
    },
    {
      key: 3,
      content: <img src="/FitMinded/mobile03.png" alt="3" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) }
  })

  return (
    <div id="project-container" className="fit-minded">
      <div id="project" className="fit-minded">
        <Fade left>
          <div className="left">
            <Carousel
              goToSlide={slide}
              slides={slides}
              config={config.gentle}
              showNavigation={false}
              offsetRadius={1}
            />
          </div>
        </Fade>
        <Fade right>
          <div className="right">
            <img src="/FitMinded/logo.png" alt="logo" className="logo" />
            <h3>
              A platform for connecting individuals with similar athletic
              interests.
            </h3>
            <StackLogos stack={['react', 'redux', 'mongoDB', 'firebase']} />
            <p>
              Pariatur sit elit excepteur ex sunt labore. Deserunt ipsum do
              ullamco minim culpa in. Qui minim duis sit fugiat veniam cillum
              dolore aute laboris laborum tempor et in anim.
            </p>
            <div className="button-cont">
              <button>GITHUB</button>
              <button>HEROKU</button>
              <button>VIDEO</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
