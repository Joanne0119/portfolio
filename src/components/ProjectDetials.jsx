import { Canvas } from '@react-three/fiber'
import { OrbitControls,  PerspectiveCamera } from '@react-three/drei'
import React, { useEffect, useRef, Suspense, useState } from 'react'
import Macbook from './Macbook.jsx'
import Cellphone from './Cellphone.jsx'
import { calculateSizes} from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import  CanvasLoader  from './CanvasLoader.jsx'
// import { Leva, useControls } from 'leva'

gsap.registerPlugin(ScrollTrigger)

const ProjectDetials = ({currentProject}) => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <div 
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-8 my-5 rounded-2xl shadow-xl px-5 card`} 
        style={{top: `calc(10% + ${currentProject.id * 15 }px) `, background: `${currentProject.background} ` }}
    >
        {currentProject.macbook ? (
            <Canvas className='w-full' camera={{ fov: 75, position: [-10, 45, 20]}}>
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault fov={30} position={[0, 0, 30]} />
                    <Macbook 
                        scale={sizes.macbookScale}
                        position={[0.3, -5.4, 0]}
                        rotation={[0.6, 0, 0]}
                        texture={currentProject.texture}   
                    />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={1}/>
                    <directionalLight position={[10, 10, -10]} intensity={2}/>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={true} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        ):(
            <Canvas className='w-full' camera={{ fov: 75, position: [-10, 45, 20]}}>
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault fov={30} position={[0, 0, 30]} />
                    <Cellphone 
                        scale={sizes.phoneScale}
                        position={[0, 0, 0]}
                        rotation={[0, 0.2, 0]}
                        texture={currentProject.texture}  
                    />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={1}/>
                    <directionalLight position={[10, 10, -10]} intensity={2}/>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={true} maxPolarAngle={Math.PI / 2} />
            </Canvas>
         )}

        <div className='min-h-80  p-3 flex flex-col justify-between'>
            <div >
                <h3 className='text-3xl font-generalsans font-medium text-sky-950 py-5'>{currentProject.name}</h3>
                <ul className='flex gap-2 flex-wrap'>
                    {currentProject.skills.map((tag, index) => (
                        <li key={index} className='sm:text-sm md:text-sm text-xs text-base text-sky-800 font-generalsans font-medium  py-1 border-2 border-sky-800 rounded-3xl px-3'>
                            {tag}
                        </li>
                    ))}
                </ul>
                <p className=' text-base text-sky-800 font-generalsans font-medium  py-5'>
                    {currentProject.description}
                </p>
            </div>
            <div className='bottom-4 right-4 flex justify-end'>
                <button>
                    <a href={currentProject.github} target='_blank' className='flex bg-sky-950 px-1 py-2 rounded-xl mx-2 hover:translate-y-1 hover:bg-black-300 transition-all duration-300' >
                        <img src='../public/assets/github.svg' alt='github' className='sm:w-5 h-auto object-contain sm:min-w-5 sm:min-h-5 mx-2 w-4 min-w-4 min-h-4'/>
                    </a>
                </button>
                <button>
                    <a href={currentProject.netlify} target='_blank' className='flex gap-2 bg-sky-900 px-8 py-2 rounded-xl text-white hover:translate-y-1 hover:bg-black-300 transition-all duration-300'>
                        <p className='font-generalsans text-xs sm:text-sm'>
                            {currentProject.macbook ? 'View Project' : 'View Demo'}
                        </p>
                        <img src='../public/assets/up-right-from-square.svg' alt='link' className='sm:w-4 h-auto object-contain sm:min-w-4 sm:min-h-4 w-3 min-w-3 min-h-3'/>
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetials
