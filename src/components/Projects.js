import React from 'react'
import { SingleProject1, SingleProject2, SingleProject3 } from './'
import { Fade } from 'react-reveal'

export const Projects = () => {
  return (
    <div id="projects-container">
      <div>
        <h1>
          <span>PROJECTS</span>
        </h1>
      </div>
      <div id="projects">
        <Fade up delay={200}>
          <SingleProject1 />
        </Fade>
        <Fade up delay={400}>
          <SingleProject2 />
        </Fade>
        <Fade up delay={600}>
          <SingleProject3 />
        </Fade>
      </div>
    </div>
  )
}
