import React from 'react'

export const Contact = () => {
  return (
    <div id="contact">
      <div className="title">
        <h2>
          <i>Contact Me</i>
        </h2>
        <div className="line"></div>
      </div>
      <div className="description">
        <p>
          I am currently open to job opportunities, as well as freelance and
          contract work. Please feel free to reach out with any opportunities or
          inquiries.
        </p>
      </div>
      <div>
        <h2>
          <a
            href={`mailto:${'robertjfox94@gmail.com'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch - <i>robertjfox94@gmail.com</i>
          </a>
        </h2>
      </div>
    </div>
  )
}
