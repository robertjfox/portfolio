import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export const Card4 = () => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="card" onClick={toggleFlipped}>
        <div className="header">
          <h2>Adventurer</h2>
          <img src="/icons/campingBlue.png" alt="code" />
        </div>
        <p>
          My desire to take my design talent to the next level drove me to learn
          full-stack web development and ultimately attend a full-time coding
          bootcamp.
        </p>
      </div>
      <div className="card-back" onClick={toggleFlipped}>
        <div className="header">
          <img src="/icons/campingWhite.png" alt="code" />
        </div>
      </div>
    </ReactCardFlip>
  )
}
