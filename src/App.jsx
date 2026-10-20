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
// Matches the preloader's fade-out duration.
const FADE_MS = 500;

const App = () => {
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [preloaderMounted, setPreloaderMounted] = useState(true);
  const [shownProgress, setShownProgress] = useState(0);
  const { active, progress, total } = useProgress();
  const { switching } = useLanguage();

  useEffect(() => {
    if (ready || active || total === 0 || progress < 100) return;
    const t = setTimeout(() => setReady(true), SETTLE_MS);
    return () => clearTimeout(t);
  }, [ready, active, progress, total]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), MAX_LOADING_MS);
    return () => clearTimeout(t);
  }, []);

  // useProgress drops back whenever new assets join the queue; keep the bar
  // moving forward and hold it short of full until loading has settled.
  useEffect(() => {
    setShownProgress((prev) => (ready ? 100 : Math.max(prev, Math.min(progress, 99))));
  }, [progress, ready]);

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    const t = setTimeout(() => setPreloaderMounted(false), FADE_MS);
    return () => clearTimeout(t);
  }, [entered]);

  return (
    <main>
      {preloaderMounted && (
        <Preloader
          progress={shownProgress}
          ready={ready}
          leaving={entered}
          onEnter={() => setEntered(true)}
        />
      )}
      {/* Mounted behind the preloader so every canvas loads its assets up front. */}
      <div
        aria-hidden={!entered}
        className={`transition-opacity ease-out ${
          !entered ? 'opacity-0 pointer-events-none' : switching ? 'duration-200 opacity-0' : 'duration-500 opacity-100'
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
