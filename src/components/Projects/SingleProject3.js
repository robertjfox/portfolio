import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import { StackLogos } from '..'

export const SingleProject3 = () => {
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className="single-project"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="gradient3" id="project3">
        <img
          src="projects/youTuba.png"
          alt="youTuba"
          className="project-logo"
        />
      </div>
      <Fade when={hover} delay={200}>
        <div className="project-description">
          An ecommerce platform for selling musical instruments.
        </div>
        <h3>Made with:</h3>
        <StackLogos stack={['react', 'redux', 'nodeJS', 'postgreSQL']} />
        <h3>Check it out on:</h3>
        <div className="logo-cont">
          <img src="icons/heroku.png" alt="heroku"></img>
          <img src="icons/github.png" alt="heroku"></img>
          <img src="icons/youtube.png" alt="heroku"></img>
        </div>
      </Fade>
    </div>
  )
}
