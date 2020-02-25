import React from 'react'
import './App.css'
import {
  Loading,
  Navbar,
  Sidebar,
  Landing,
  About,
  Experience,
  Project1,
  Project2,
  Project3,
  Contact
} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Loading />
      <Navbar />
      <Sidebar />
      <div id="main">
        <Landing />
        <About />
        <Experience />
        <Project1 />
        <Project2 />
        <Project3 />
        <Contact />
      </div>
    </div>
  )
}

export default App
