import React, { useState } from 'react'
import { Fade, Zoom } from 'react-reveal'

export const AboutMe = () => {
  const [view, setView] = useState('ABOUT')

  const toggleView = e => {
    setView(e.target.innerText)
  }

  return (
    <div id="about-me">
      <div>
        <h1>
          <span>{view}</span>
        </h1>
      </div>
      {view === 'ABOUT' && (
        <div className="content">
          <Fade left>
            <div className="item">
              <div className="header">
                <h2>Developer</h2>
                <img src="/icons/code.png" alt="code" />
              </div>
              <p>
                Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
                officia ullamco amet ullamco veniam aute aute Lorem. Quis
                proident pariatur duis est voluptate sit exercitation enim.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="item">
              <div className="header">
                <h2>Designer</h2>
                <img src="/icons/design.png" alt="code" />
              </div>
              Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
              officia ullamco amet ullamco veniam aute aute Lorem. Quis proident
              pariatur duis est voluptate sit exercitation enim.
            </div>
          </Fade>
        </div>
      )}
      {view === 'EDUCATION' && (
        <div className="content">
          <Fade left>
            <div className="item">
              <div className="header">
                <h2>Fullstack Academy</h2>
                <img src="/icons/fullstack.png" alt="code" />
              </div>
              <p>
                Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
                officia ullamco amet ullamco veniam aute aute Lorem. Quis
                proident pariatur duis est voluptate sit exercitation enim.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="item">
              <div className="header">
                <h2>University of Wisconsin</h2>
                <img src="/icons/wisconsin.png" alt="code" />
              </div>
              Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
              officia ullamco amet ullamco veniam aute aute Lorem. Quis proident
              pariatur duis est voluptate sit exercitation enim.
            </div>
          </Fade>
        </div>
      )}
      {view === 'EXPERIENCE' && (
        <div className="content">
          <Fade left>
            <div className="item">
              <div className="header">
                <h2>Fox's Clothing Stores</h2>
                <img src="/icons/code.png" alt="code" />
              </div>
              <p>
                Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
                officia ullamco amet ullamco veniam aute aute Lorem. Quis
                proident pariatur duis est voluptate sit exercitation enim.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="item">
              <div className="header">
                <h2>M. Paul Friedberg</h2>
                <img src="/icons/design.png" alt="code" />
              </div>
              Anim nisi eu mollit id. Excepteur officia eiusmod mollit eiusmod
              officia ullamco amet ullamco veniam aute aute Lorem. Quis proident
              pariatur duis est voluptate sit exercitation enim.
            </div>
          </Fade>
        </div>
      )}
      <div className="button-cont">
        <Zoom delay={200}>
          <button onClick={toggleView}>ABOUT</button>
        </Zoom>
        <Zoom delay={400}>
          <button onClick={toggleView}>EDUCATION</button>
        </Zoom>
        <Zoom delay={600}>
          <button onClick={toggleView}>EXPERIENCE</button>
        </Zoom>
      </div>
    </div>
  )
}
