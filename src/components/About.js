import React from 'react'
import { Fade } from 'react-reveal'

export const About = () => {
  return (
    <div id="about">
      <div className="description">
        <div className="title">
          <h2>
            <i>About Me</i>
          </h2>
          <div className="line"></div>
        </div>
        <Fade up>
          <p>
            I have a passion for designing and creating seamless user
            experiences and elegant user interfaces. From web designs, to
            full-stack mobile applications, I will be an valuable addition to
            your next project.
          </p>
        </Fade>
        <Fade up>
          <p>
            I have just completed{' '}
            <a href="https://www.fullstackacademy.com/">
              <i>FullStack Academy of Code</i>
            </a>
            . FullStack is a 17-week full-time software development bootcamp.
            Its curriculum covers NodeJS, Express, Relational Databases such as
            PostgreSQL, and React - Redux on the front end.
          </p>
        </Fade>
      </div>
      <Fade up>
        <div className="headshot">
          <img src="/aboutMe/pic5.png" alt="robert" />
          <div className="headshot-border"></div>
        </div>
      </Fade>
    </div>
  )
}
