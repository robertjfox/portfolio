import React from 'react'
import { Fade } from 'react-reveal'

export const About = () => {
  return (
    <div id="about">
      <div className="left">
        <div className="title">
          <h2>
            <i>About Me</i>
          </h2>
          <div className="line"></div>
        </div>
        <div className="description">
          <Fade up>
            <p>
              I have a passion for designing and developing seamless experiences
              and elegant interfaces. From web designs, to full-stack mobile
              applications, I will be a valuable addition to your next project.
            </p>
          </Fade>
          <Fade up>
            <p>
              I have just completed{' '}
              <a href="https://www.fullstackacademy.com/">
                <i>FullStack Academy of Code</i>
              </a>
              . FullStack is a 17-week full-time software development bootcamp.
              Its curriculum covers NodeJS, Express, Relational Databases such
              as PostgreSQL, React and Redux.
            </p>
          </Fade>
        </div>
      </div>
      <Fade up>
        <div className="headshot">
          <img src="aboutMe/pic5.png" alt="robert" />
          <div className="headshot-border"></div>
        </div>
      </Fade>
    </div>
  )
}
