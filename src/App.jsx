import React, { useState, useEffect } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Preloader from './components/Preloader'
import { useProgress } from '@react-three/drei'

const  App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { progress: canvasProgress } = useProgress(); // Get 3D model loading progress

  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Simulate asset loading progress for non-3D assets (like images, etc.)
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

  useEffect(() => {
    // Combine canvas loading and minimum time constraint
    if (progress === 100 && canvasProgress === 100) {
      setLoading(false); // Only hide preloader when both are done
    }
  }, [progress, canvasProgress]);
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