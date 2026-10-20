import React, { useState, useEffect } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Preloader from './components/Preloader'
import { useLanguage } from './i18n/LanguageContext.jsx'
import { useProgress } from '@react-three/drei'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Loaders can go idle briefly between batches (e.g. a model finishes before its
// canvas mounts and requests textures), so wait until progress stays at 100%.
const SETTLE_MS = 500;
// Never trap visitors on the preloader if an asset hangs.
const MAX_LOADING_MS = 30000;

const App = () => {
  const [loading, setLoading] = useState(true);
  const { active, progress, total } = useProgress();
  const { switching } = useLanguage();

  useEffect(() => {
    if (!loading || active || total === 0 || progress < 100) return;
    const t = setTimeout(() => setLoading(false), SETTLE_MS);
    return () => clearTimeout(t);
  }, [loading, active, progress, total]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), MAX_LOADING_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [loading]);

  return (
    <main>
      {loading && <Preloader/>}
      {/* Mounted behind the preloader so every canvas loads its assets up front. */}
      <div
        aria-hidden={loading}
        className={`transition-opacity ease-out ${
          loading ? 'opacity-0 pointer-events-none' : switching ? 'duration-200 opacity-0' : 'duration-500 opacity-100'
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
