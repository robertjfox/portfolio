import React, { useState } from 'react'
import { Fade } from 'react-reveal'

export const Project3 = () => {
  const [hover, setHover] = useState(true)

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div id="project-container" className="you-tuba">
      <Fade up>
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
            <div className="title">
              <h1>
                <i>YouTuba</i>
              </h1>
              <div className="line"></div>
              <div className="link-cont">
                <a
                  href={`https://github.com/Donuts-Org/donuts-grace-shopper`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/github.png" alt="github" />
                </a>
                <a
                  href={`https://www.you2ba.herokuapp.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/heroku.png" alt="heroku" />
                </a>
              </div>
            </div>
            <p className="description">
              YouTuba is an ecommerce platform for selling musical instruments.
              It leverages user sessions to allow for both guest and logged-in
              experiences. My contribution to this project was the cart and
              checkout features as well as all of the styling.
            </p>
            <div className="technologies">
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
