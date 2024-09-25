import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Macbook from '../components/Macbook'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'

const Project = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section>
            <h1 className='head-text'>Projects</h1>
            <div className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 h-70'>
                <Canvas className='w-full h-full border'>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Macbook 
                            scale={sizes.macbookScale}
                            position={[0, -20, 0]}
                            rotation={[Math.PI / 9, Math.PI / 15, 0]}
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={2}/>
                            
                </Canvas>
                <div>
                    <h3>Wyan Music</h3>
                    <p className='flex gap-2'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Bootstrap5</span>
                        <span>Firebase</span>
                    </p>
                    <p>
                        A music streaming app. User can search songs and add them to playlist.
                        User can also upload their own songs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Project
