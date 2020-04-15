import React, { useContext, useState } from 'react'
import { Fade, Zoom } from 'react-reveal'
import { PageContext } from '../contexts/PageContext'

export const Navbar = () => {
  const { setPage } = useContext(PageContext)
  const [drop, setDrop] = useState(false)

  const setPageMobile = (page) => {
    setPage(page)
    setDrop(false)
  }

  return (
    <div id="navbar">
      <div className="left">
        <Zoom delay={5000}>
          <div className="circle" onClick={() => setPage(0)}>
            RF
          </div>
        </Zoom>
      </div>
      <div className="right">
        <Fade down delay={5000}>
          <p onClick={() => setPage(1)}>About</p>
        </Fade>
        <Fade down delay={5100}>
          <p onClick={() => setPage(2)}>Experience</p>
        </Fade>
        <Fade down delay={5200}>
          <p onClick={() => setPage(3)}>Work</p>
        </Fade>
        <Fade down delay={5300}>
          <p onClick={() => setPage(6)}>Contact</p>
        </Fade>
      </div>
      <div className="hamburger">
        <Zoom delay={5000}>
          <img
            src="icons/hamburger.png"
            alt="menu"
            className="hamburger"
            onClick={() => setDrop(!drop)}
          />
        </Zoom>
      </div>
      {drop && (
        <div id="hamburger-drop">
          <div className="hamburger-list">
            <Fade down delay={100}>
              <p onClick={() => setPageMobile(1)}>About</p>
            </Fade>
            <Fade down delay={200}>
              <p onClick={() => setPageMobile(2)}>Experience</p>
            </Fade>
            <Fade down delay={300}>
              <p onClick={() => setPageMobile(3)}>Work</p>
            </Fade>
            <Fade down delay={400}>
              <p onClick={() => setPageMobile(6)}>Contact</p>
            </Fade>
          </div>
        </div>
      )}
    </div>
  )
}
