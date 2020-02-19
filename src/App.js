import React from 'react'
import './App.css'
import {
  Landing,
  AboutMe,
  Project1,
  Project2,
  Project3,
  Contact
} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Landing />
      <AboutMe />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
    </div>
  )
}

export default App
