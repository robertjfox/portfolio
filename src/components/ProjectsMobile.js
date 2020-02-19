import React, { useState } from 'react'
import { StackLogos } from './'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '../projectData.js'

export const ProjectsMobile = () => {
  const [current, setCurrent] = useState(0)

  const changeCurrent = index => {
    setCurrent(index)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider',
    afterChange: index => changeCurrent(index)
  }

  return (
    <div id="projects-mobile">
      <Slider {...settings}>
        <div className="slide">
          <img
            src={data[0].imagePath}
            alt="projectImage"
            className="project-image"
          />
        </div>
        <div className="slide">
          <img
            src={data[1].imagePath}
            alt="projectImage"
            className="project-image"
          />
        </div>
      </Slider>
      {current === 0 && (
        <div className="info">
          <p>
            A location based social media platform for connecting individuals
            with similar athletic interests.
          </p>
          <StackLogos
            stack={['react', 'redux', 'nodeJS', 'mongoDB', 'firebase']}
          />
          <div className="button-cont">
            <button>GITHUB</button>
            <button>DEPLOYED</button>
          </div>
        </div>
      )}
      {current === 1 && (
        <div className="info">
          <p>
            A productivity application for creating and maintaining habits, and
            visually tracking your progress over time.
          </p>
          <StackLogos stack={['react', 'redux', 'nodeJS', 'postgreSQL']} />
          <div className="button-cont">
            <button>GITHUB</button>
            <button>DEPLOYED</button>
          </div>
        </div>
      )}
    </div>
  )
}
