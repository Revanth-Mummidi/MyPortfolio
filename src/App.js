import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'
import Profiles from './Components/Profiles'

function App() {
  return (
    <div className='overflow-y-auto no-scrollbar bg-slate-700' >
      <Navbar/>
      <HomePage />
      <Skills/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Profiles/>
      <Contact/>
    </div>
  )
}

export default App