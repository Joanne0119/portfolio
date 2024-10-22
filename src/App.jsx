import React, { useState, useEffect } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Preloader from './components/Preloader'

const  App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating asset loading and updating progress gradually

    // Ensure the preloader stays for at least 5 seconds
    const loadTimeout = setTimeout(() => {
      setLoading(false); // Hide preloader after 5 seconds
    }, 5000);

    // Cleanup intervals when component unmounts
    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <main>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  )
}

export default App