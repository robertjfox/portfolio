import React, { useState } from 'react'
import { Fade, Zoom } from 'react-reveal'
import { StackLogos } from './'

export const SingleProject = () => {
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
      <div className="gradient-logo"></div>
      <Fade when={hover} delay={200}>
        <div className="button-cont">
          <button>GITHUB</button>
          <button>HEROKU</button>
        </div>
        <div className="project-description">
          A location-based social platform for connecting with people who share
          similar athletic intersts.
        </div>
        <StackLogos stack={['react', 'redux', 'mongoDB', 'firebase']} />
      </Fade>
    </div>
  )
}
