import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export const Card2 = () => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="card" onClick={toggleFlipped}>
        <div className="header">
          <h2>Developer</h2>
          <img src="/icons/codeBlue.png" alt="code" />
        </div>
        <p>
          My desire to take my design talent to the next level drove me to learn
          full-stack web development and ultimately attend a full-time coding
          bootcamp.
        </p>
      </div>
      <div className="card-back" onClick={toggleFlipped}>
        <div className="header">
          <img src="/icons/codeWhite.png" alt="code" />
        </div>
      </div>
    </ReactCardFlip>
  )
}
