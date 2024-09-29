import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'

const  App = () => {
  return (
    <main className='mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  )
}

export default App