import React from "react";
import { Fade } from "react-reveal";

export const Project3 = () => {
  return (
    <div id="project-container" className="covid-map">
      <Fade>
        <div id="project" className="covid-map">
          <div className="left">
            <a
              href="https://robertjfox.github.io/CovidMap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="CovidMap/desktop01.png" alt="map on desktop view" />
            </a>
          </div>
          <div className="right">
            <div className="title">
              <h1>
                <i>Covid-19 Map</i>
              </h1>
              <div className="line"></div>
              <div className="link-cont">
                <a
                  href={`https://github.com/robertjfox/CovidMap`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="icons/github.png" alt="github" />
                </a>
                <a
                  href={`https://robertjfox.github.io/CovidMap/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="icons/heroku.png" alt="heroku" />
                </a>
              </div>
            </div>
            <p className="description">
              I built this interactive map to help visualize the most relevant
              data in regard to the Covid-19 Pandemic. It is very easy to get
              lost in the sea of media opinions and figures shared without
              context. I hope this platform can provide a clearer view of the
              virus' localized trajectory over time.
            </p>
            <div className="technologies">
              <p>React</p>
              <p>Redux</p>
              <p>Chart.js</p>
              <p>CovidTracker API</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
