import React from 'react'
import { Link } from 'react-scroll'
import { Fade, Zoom } from 'react-reveal'

export const Navbar = () => {
  return (
    <div id="navbar">
      <div className="left">
        <Zoom delay={5000}>
          <Link
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            offset={-200}
            duration={375}
            className="landing-button"
          >
            <div className="circle">RF</div>
          </Link>
        </Zoom>
      </div>
      <div className="right">
        <Fade down delay={5000}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={375}
            className="landing-button"
          >
            <p>About</p>
          </Link>
        </Fade>
        <Fade down delay={5100}>
          <Link
            activeClass="experience"
            to="experience"
            spy={true}
            smooth={true}
            offset={-120}
            duration={375}
            className="landing-button"
          >
            <p>Experience</p>
          </Link>
        </Fade>
        <Fade down delay={5200}>
          <Link
            activeClass="experience"
            to="project"
            spy={true}
            smooth={true}
            offset={-120}
            duration={375}
            className="landing-button"
          >
            <p>Work</p>
          </Link>
        </Fade>
        <Fade down delay={5300}>
          <Link
            activeClass="experience"
            to="contact"
            spy={true}
            smooth={true}
            offset={-120}
            duration={375}
            className="landing-button"
          >
            <p>Contact</p>
          </Link>
        </Fade>
      </div>
      <div className="hamburger">
        <Zoom delay={5000}>
          <img src="icons/hamburger.png" alt="menu" className="hamburger" />
        </Zoom>
      </div>
    </div>
  )
}
