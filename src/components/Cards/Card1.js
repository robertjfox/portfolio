import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export const Card1 = () => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="card" onClick={toggleFlipped}>
        <div className="header">
          <h2>Designer</h2>
          <img src="/icons/designBlue.png" alt="code" />
        </div>
        <p>
          A lifetime of drawing paired with a strong graphic design education in
          college have made me a highly effective at creating cohesive and
          captivating web pages.
        </p>
      </div>
      <div className="card-back" onClick={toggleFlipped}>
        <div className="header">
          <img src="/icons/designWhite.png" alt="code" />
        </div>
      </div>
    </ReactCardFlip>
  )
}
