import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'

const  App = () => {
  return (
    <main className='mx-auto mb-96'>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  )
}

export default App