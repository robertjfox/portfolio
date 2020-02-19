import React from 'react'
import { Fade, Zoom } from 'react-scroll'

export const StackLogos = ({ stack }) => {
  return (
    <div className="technologies">
      {stack.map((logo, index) => {
        return (
          <img key={index} src={`/stackLogos/${logo}.png`} alt="stackLogo" />
        )
      })}
    </div>
  )
}
