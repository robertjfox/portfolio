import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'

export const Landing = () => {
  const [arrow, setArrow] = useState(false)

  const wait = time => {
    setTimeout(() => {
      setArrow(true)
    }, time)
  }

  return (
    <div id="landing">
      <Fade up delay={6000}>
        <p className="line-1">
          Hi, I'm <i>Robert Fox</i>
        </p>
      </Fade>
      <Fade up delay={7000}>
        <p className="line-2">and I'm a software engineer based in NYC.</p>
      </Fade>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-200}
        duration={375}
        className="landing-button"
        wait={wait(8000)}
      >
        {arrow ? (
          <img src="/media/down-arrow.png" alt="down" />
        ) : (
          <div className="arrow-placeholder"></div>
        )}
      </Link>
    </div>
  )
}
