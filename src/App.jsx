import React, { useState, useEffect } from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Project from './section/Project'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Preloader from './components/Preloader'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const  App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalAssets = 9; // 1 image + 4 3D models + 4 videos
    let loadedAssets = 0;
    const assetWeight = 1 / totalAssets;  // Each asset has equal weight

    // Function to load the image
    const loadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100); // Update progress
          resolve();
        };
      });

    // Function to load videos
    const loadVideo = (src) =>
      new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.onloadeddata = () => {
          loadedAssets += 1;
          setProgress((loadedAssets / totalAssets) * 100); // Update progress
          resolve();
        };
      });

    // LoadingManager for 3D models
    const loadingManager = new THREE.LoadingManager();

    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      // Progress only for the models, adding their weight into the total progress
      setProgress((loadedAssets + itemsLoaded / itemsTotal) * assetWeight * 100); // Combine image, video, and models
    };

    loadingManager.onLoad = () => {
      loadedAssets += 4; // All 4 models are loaded
      setProgress((loadedAssets / totalAssets) * 100); // Final progress update
      setLoading(false); // All assets loaded
    };

    // Function to load 3D models
    const load3DModel = (modelPath) =>
      new Promise((resolve) => {
        const loader = new GLTFLoader(loadingManager);
        loader.load(modelPath, (gltf) => {
          resolve(gltf);
        });
      });

    const loadAssets = async () => {
      // Load 4 3D models
      await load3DModel('/models/CodingAvatar.glb');
      await load3DModel('/models/hiavatar.glb');
      await load3DModel('/models/phone.glb');
      await load3DModel('/models/macbook.glb');

      // Load the videos first
      await loadVideo('/projects/WyanMusicDemo.mp4');
      await loadVideo('/projects/MarketDuckDemo.mp4');
      await loadVideo('/projects/enSPIREDemo.mp4');
      await loadVideo('/projects/PortfolioDemo.mp4');

      // Load the image
      await loadImage('/assets/me.png');
    };

    loadAssets();
  }, []);

  return (
    <main>
      {loading ? (
          <Preloader/>
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