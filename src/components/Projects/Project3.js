import React, { useState } from 'react'
import { StackLogos } from '../'
import { Fade } from 'react-reveal'

export const Project3 = () => {
  const [hover, setHover] = useState(true)

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div id="project-container" className="you-tuba">
      <div id="project" className="you-tuba">
        <div className="left">
          {hover ? (
            <img
              src="YouTuba/desktop01.png"
              alt="youTuba"
              className="you-tuba-images"
              onMouseEnter={toggleHover}
            />
          ) : (
            <img
              src="YouTuba/desktop02.png"
              alt="youTuba"
              className="you-tuba-images"
              onMouseLeave={toggleHover}
            />
          )}
        </div>
        <div className="right">
          <img src="/YouTuba/logo.png" alt="logo" className="logo" />
          <h3>A an ecommerce platform for selling instruments.</h3>
          <StackLogos stack={['react', 'redux', 'nodeJS', 'postgreSQL']} />
          <p>
            YouTuba leverages user sessions to allow for both guest and
            logged-in experiences. My contribution to this project was the cart
            and checkout features as well as all of the styling.
          </p>
          <div className="button-cont">
            <button>GITHUB</button>
            <button>HEROKU</button>
            <button>VIDEO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
