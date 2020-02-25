import React from 'react'
import { Fade } from 'react-reveal'

export const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="top"></div>
      <div className="bottom">
        <Fade left delay={7500}>
          <a
            href={`mailto:${'robertjfox94@gmail.com'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="social/contact.png" alt="contact" />
          </a>
        </Fade>
        <Fade left delay={7600}>
          <a
            href="https://github.com/robertjfox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="social/github.png" alt="github" />
          </a>
        </Fade>
        <Fade left delay={7700}>
          <a
            href="https://www.linkedin.com/in/robert-fox-1b341996/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="social/linkedin.png" alt="linkedin" />
          </a>
        </Fade>
        <Fade left delay={7800}>
          <a
            href="https://twitter.com/rfoxjr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="social/twitter.png" alt="twitter" />
          </a>
        </Fade>
        <Fade up delay={7500}>
          <div className="line"></div>
        </Fade>
      </div>
    </div>
  )
}
