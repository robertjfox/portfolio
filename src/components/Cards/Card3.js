import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export const Card3 = () => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="card" onClick={toggleFlipped}>
        <div className="header">
          <h2>Artist</h2>
          <img src="/icons/artistBlue.png" alt="code" />
        </div>
        <p>
          As much of what I do is virtual, it's important for me not to lose
          touch with physical design and expression.
          <br />
          <br />
          Check out my work.
        </p>
      </div>
      <div className="card-back" onClick={toggleFlipped}>
        <div className="header">
          <img src="/icons/artistWhite.png" alt="code" />
        </div>
      </div>
    </ReactCardFlip>
  )
}
