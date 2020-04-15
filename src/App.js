import React from 'react'
import './App.css'
import { Loading, Navbar, Sidebar } from './components'
import Main from './Main'
import { PageProvider } from './contexts/PageContext'

function App() {
  return (
    <div className="App">
      <PageProvider>
        <header className="App-header"></header>
        <Loading />
        <Navbar />
        <Sidebar />
        <Main />
      </PageProvider>
    </div>
  )
}

export default App
