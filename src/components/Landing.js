import React from 'react'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'

export const Landing = () => {
  return (
    <div id="landing">
      <div id="landing-left">
        <div id="landing-text">
          <Fade left delay={500}>
            <h1>
              Hi, I'm <span>Rob</span>
            </h1>
          </Fade>
          <Fade left delay={1000}>
            <h1>
              and I'm a full-stack <span>software engineer.</span>
            </h1>
          </Fade>
        </div>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={0}
          duration={375}
          className="landing-button"
        >
          <button>WELCOME</button>
        </Link>
      </div>
      <div id="landing-right"></div>
      {/* <Fade right delay={500}>
        <img src="aboutMe/robBlue.png" alt="me" className="image" />
      </Fade> */}
    </div>
  )
}
