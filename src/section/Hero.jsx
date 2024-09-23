import React from 'react'
import { Canvas } from '@react-three/fiber'
import CodingAvatar from '../components/CodingAvatar'
import { PerspectiveCamera } from '@react-three/drei'
import { calculateSizes } from '../constant'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='border content-center'>
                <p className='xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-bold text-sky-950 !leading-normal'>
                    Hello I'm Joanne!
                </p>
                <p className='sm:text-3xl text-2xl text-sky-800 font-generalsans font-medium'>
                    A Creative Programmer and Designer
                </p>
            </div>
            <div className='border'>
            <Canvas className='w-full h-full'>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                
                <CodingAvatar
                    scale={sizes.deskScale} 
                    position={sizes.deskPosition} 
                />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={2}/>
            </Canvas>
            </div>
        </section>
    )
}

export default Hero
