import React from 'react'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'

export const Navbar = () => {
  return (
    <div id="navbar">
      <div className="left">
        <h3>ROBERT FOX PORTFOLIO</h3>
      </div>
      <div className="right">
        <Fade down>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={375}
            className="landing-button"
          >
            <img src="social/contact.png" alt="contact" />
          </Link>
        </Fade>
        <Fade down delay={150}>
          <a href="https://github.com/robertjfox">
            <img src="social/github.png" alt="gmail" />
          </a>
        </Fade>
        <Fade down delay={300}>
          <a href="https://www.linkedin.com/in/robert-fox-1b341996/">
            <img src="social/linkedin.png" alt="linkedin" />
          </a>
        </Fade>
        <Fade down delay={450}>
          <a href="https://twitter.com/rfoxjr">
            <img src="social/twitter.png" alt="twitter" />
          </a>
        </Fade>
      </div>
    </div>
  )
}
