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
    // Simulate asset loading (Replace this with real asset loading logic)
    const loadAssets = async () => {
      try {
        // Fetch your assets, models, or data here
        // E.g., loading 3D models or videos
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating load time
      } catch (error) {
        console.error('Error loading assets:', error);
      } finally {
        setLoading(false); // Hide preloader once loading is complete
      }
    };

    loadAssets();
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