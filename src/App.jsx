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
      const totalAssets = 5; // 1 image + 4 3D models
      let loadedAssets = 0;
      const imageWeight = 1 / totalAssets;  // Each asset has equal weight
      const modelWeight = 1 / totalAssets;
  
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
  
      // LoadingManager for 3D models
      const loadingManager = new THREE.LoadingManager();
  
      loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        // Progress only for the models, adding their weight into the total progress
        setProgress((1 + (itemsLoaded / itemsTotal)) * modelWeight * 100); // Combine image load and models
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
        // Load the image
        await loadImage('/assets/me.png');
  
        // Load 4 3D models
        await load3DModel('/models/CodingAvatar.glb');
        await load3DModel('/models/hiavatar.glb');
        await load3DModel('/models/phone.glb');
        await load3DModel('/models/macbook.glb');
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