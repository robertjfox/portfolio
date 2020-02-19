import React from 'react'
import './App.css'
import {
  Landing,
  AboutMe,
  Projects,
  ProjectsMobile,
  Contact
} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Landing />
      <AboutMe />
      <Projects />
      <ProjectsMobile />
      <Contact />
    </div>
  )
}

export default App
