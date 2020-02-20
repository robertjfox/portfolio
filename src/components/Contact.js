import React from 'react'
import { Fade } from 'react-reveal'

export const Contact = () => {
  return (
    <div id="contact">
      <form>
        <Fade left delay={100}>
          <input type="text" placeholder="Your Name" />
        </Fade>
        <Fade right delay={200}>
          <input type="text" placeholder="Your Email" />
        </Fade>
        <Fade left delay={300}>
          <textarea rows={6} placeholder="Your Message" />
        </Fade>
        <Fade right delay={400}>
          <button type="submit">SUBMIT</button>
        </Fade>
      </form>
      <div className="gradient"></div>
    </div>
  )
}
