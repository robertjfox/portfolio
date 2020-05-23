import React, { useState, useContext } from 'react'
import { Fade } from 'react-reveal'
import { PageContext } from '../contexts/PageContext'

export const Landing = () => {
  const [arrow, setArrow] = useState(false)
  const { setPage } = useContext(PageContext)

  const wait = (time) => {
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
        <p className="line-2">and I'm a software developer and designer.</p>
      </Fade>

      <div wait={wait(8000)}>
        {arrow ? (
          <img
            src="media/down-arrow.png"
            alt="down"
            onClick={() => setPage(1)}
          />
        ) : (
          <div className="arrow-placeholder"></div>
        )}
      </div>
    </div>
  )
}
