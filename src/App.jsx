import React, { useState, useEffect } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Preloader from './components/Preloader'
import { useLanguage } from './i18n/LanguageContext.jsx'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MODELS = [
  '/models/CodingAvatar.glb',
  '/models/hiavatar.glb',
  '/models/phone.glb',
  '/models/macbook.glb',
  '/models/Award.glb',
];

const VIDEOS = [
  '/projects/toyDemo.mp4',
  '/projects/toyPhoneDemo.mp4',
  '/projects/MarketDuckDemo.mp4',
  '/projects/enSPIREDemo.mp4',
  '/projects/PortfolioDemo.mp4',
];

const IMAGES = [
  '/assets/me.png',
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { switching } = useLanguage();

  useEffect(() => {
    const totalAssets = MODELS.length + VIDEOS.length + IMAGES.length;
    let loadedAssets = 0;
    const assetWeight = 1 / totalAssets;

    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100);
          resolve();
        };
        img.onerror = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100);
          resolve();
        };
      });

    const loadVideo = (src) =>
      new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.onloadeddata = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100);
          resolve();
        };
        video.onerror = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100);
          resolve();
        };
      });

    const loadingManager = new THREE.LoadingManager();

    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setProgress((loadedAssets + itemsLoaded / itemsTotal) * assetWeight * 100);
    };

    loadingManager.onLoad = () => {
      loadedAssets += MODELS.length;
      setProgress((loadedAssets / totalAssets) * 100);
      setLoading(false);
    };

    const load3DModel = (modelPath) =>
      new Promise((resolve) => {
        const loader = new GLTFLoader(loadingManager);
        loader.load(modelPath, (gltf) => resolve(gltf));
      });

    const loadAssets = async () => {
      for (const path of MODELS) await load3DModel(path);
      for (const path of VIDEOS) await loadVideo(path);
      for (const path of IMAGES) await loadImage(path);
    };

    loadAssets();
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <main>
      {loading ? (
          <Preloader/>
      ) : (
        <div
          className={`transition-opacity ease-out ${
            switching ? 'duration-200 opacity-0' : `duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`
          }`}
        >
          <Navbar />
          <Hero />
          <About />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  )
}

export default App
