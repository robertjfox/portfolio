import React from 'react'
import { Fade } from 'react-reveal'
import { Card1, Card2, Card3, Card4 } from './'

export const AboutMe = () => {
  return (
    <div id="about-me">
      <Fade>
        <div className="content">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </Fade>
    </div>
  )
}
