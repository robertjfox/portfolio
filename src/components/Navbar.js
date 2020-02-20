import React from 'react'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div id="navbar">
      <div className="left">
        <h3>ROBERT FOX PORTFOLIO</h3>
      </div>
      <div className="right">
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
        <a href="https://github.com/robertjfox">
          <img src="social/github.png" alt="gmail" />
        </a>
        <a href="https://www.linkedin.com/in/robert-fox-1b341996/">
          <img src="social/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://twitter.com/rfoxjr">
          <img src="social/twitter.png" alt="twitter" />
        </a>
      </div>
    </div>
  )
}
