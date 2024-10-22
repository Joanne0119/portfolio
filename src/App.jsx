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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Simulate asset loading and increment progress
        for (let i = 0; i <= 100; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50)); // Simulating asset load time
          setProgress(i); // Increment progress
        }
      } catch (error) {
        console.error('Error loading assets:', error);
      } finally {
        setLoading(false); // Hide preloader once loading is complete
      }
    };

    // Ensure the preloader runs for at least 5 seconds
    const minLoadTime = setTimeout(() => {
      loadAssets();
    }, 5000);

    return () => clearTimeout(minLoadTime); // Cleanup timeout
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