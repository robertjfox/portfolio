import React, { useState } from 'react'
import { Fade } from 'react-reveal'

export const Experience = () => {
  const [drop, setDrop] = useState(null)

  return (
    <div id="experience-cont">
      <div id="experience">
        <Fade up>
          <div className="title">
            <h2>
              <i>Experience</i>
            </h2>
            <div className="line"></div>
          </div>
          <div className="job">
            <h3>
              Recruiter & Buyer
              <a
                href={`http://www.foxs.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i> @ Fox's Clothing Stores</i>
              </a>
            </h3>
            <p className="work-date">May 2017 - November 2019</p>
            <ul>
              <li>
                Worked with software team to implement an RFID inventory
                management system
              </li>
              <li>
                Helped facilitate improvements to software systems by
                communicating with in-house developers on behalf of retail,
                warehouse and buying teams
              </li>
              <li>
                Recruited employees for 17 retail stores, a distribution center,
                and a corporate office
              </li>
            </ul>
          </div>
          <div className="job">
            <h3>
              Design Support
              <a
                href={`https://www.mpfp.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i> @ M Paul Friedberg & Partners</i>
              </a>
            </h3>
            <p className="work-date">Summer 2016</p>
            <ul>
              <li>Produced and edited construction documents using AutoCAD</li>
              <li>
                Created renderings to communicate design concepts using Adobe
                Suite/SketchUp
              </li>
            </ul>
          </div>
          <div className="job-mobile">
            <h3>
              Recruiter & Buyer
              <a
                href={`http://www.foxs.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                <i> @ Fox's Clothing Stores</i>
              </a>
            </h3>
            <p className="work-date">May 2017 - November 2019</p>
            {/* <ul>
              <li>
                Worked with software team to implement an RFID inventory
                management system
              </li>
              <li>
                Helped facilitate improvements to software systems by
                communicating with in-house developers on behalf of retail,
                warehouse and buying teams
              </li>
              <li>
                Recruited employees for 17 retail stores, a distribution center,
                and a corporate office
              </li>
            </ul> */}
          </div>
          <div className="job-mobile">
            <h3>
              Design Support
              <a
                href={`https://www.mpfp.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                <i> @ M Paul Friedberg & Partners</i>
              </a>
            </h3>
            <p className="work-date">Summer 2016</p>
            {/* <ul>
              <li>Produced and edited construction documents using AutoCAD</li>
              <li>
                Created renderings to communicate design concepts using Adobe
                Suite/SketchUp
              </li>
            </ul> */}
          </div>
        </Fade>
      </div>
    </div>
  )
}
