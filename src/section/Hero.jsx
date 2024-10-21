import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CodingAvatar from '../components/CodingAvatar'
import { PerspectiveCamera } from '@react-three/drei'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import  CanvasLoader  from '../components/CanvasLoader.jsx'
import HeroCamera from '../components/HeroCamera.jsx'

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id='home'className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 h-screen sm:mt-12 mt-16'>
            <div className=' content-center px-8 flex flex-col justify-center items-center'>
                <p className='inline xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-bold text-sky-950 !leading-normal '>
                    Hello I'm Joanne!
                </p>
                <p className='inline sm:text-2xl text-1xl text-sky-800 font-generalsans font-medium '>
                    A Creative Programmer and Designer
                </p>
                <button className='inline mt-8 sm:text-2xl text-1xl text-white bg-sky-950 px-5 py-2 rounded-full font-generalsans font-medium '>
                    <a href='#contact'>Get in touch</a>
                </button>
            </div>
            <div className=' min-w-52'>
            <Canvas className='w-full h-full min-w-52'>
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HeroCamera isMobile={isMobile}>
                        <CodingAvatar
                            scale={sizes.avatarScale} 
                            position={sizes.avatarPosition} 
                            roatation={[0,-2,0]}
                        />
                    </HeroCamera>
                    {/* <group>
                        <Cube 
                            scale={sizes.cubeScale} 
                            position={sizes.cubePosition} 
                        />
                    </group> */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={2}/>
                </Suspense>
            </Canvas>
            </div>
        </section>
    )
}

export default Hero
