import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='overflow-auto' >
      <Navbar/>
      <HomePage />
      <Skills/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App