import React, { useEffect, useRef } from 'react'
import { aboutSkills, aboutEducation, aboutExperience } from '../constant/index.js'
import Star from '../components/Star.jsx'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import GraduationHat from '../components/GraduationHat.jsx'
import Diamond from '../components/Diamond.jsx'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutItems = (aboutItems) => {
    return (
        <ul className='mx-10'>
            {
                aboutItems.aboutItems.map((item) => (
                    <li key={item.id} className='about-li'>
                        <img src='../public/assets/dount.png' alt='' className='w-5 h-auto object-contain min-w-5 min-h-5'/>
                        <p>{ item.name }</p>
                    </li>
                ))
            }
        </ul>
    )
}

const About = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const aboutRef = useRef(null)
    useEffect(() => {
        const about = aboutRef.current;

          gsap.fromTo(about, 
            { y: -100 },  
            { y: 0, duration: 1, ease: 'power3.out', 
              scrollTrigger: {
                trigger: about,
                start: 'top-=150 bottom-=100',
                end: 'bottom bottom-=180',
                scrub: 1,
              }
            }
          );
    }, [])


    return (
        <section id='about' ref={aboutRef} className='bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden mx-20'>
        <h1 className='head-text'>About</h1>
        <div className='grid grid-cols-1 p-10'>
            <div className='flex gap-8 items-center'>
                <div className='h-auto max-h-60 min-h-32 min-w-32 bg-gray-200 rounded-lg overflow-hidden'>
                    <img className='rounded-lg w-auto h-full max-h-60 min-h-32 min-w-32 object-cover' src='../public/assets/me_nobg.png' alt=''/>
                </div>
                <div className='inline-flex gap-5'>
                    <p><span className='font-medium'>Name:</span> Joanne Liu</p>
                    <p><span className='font-medium'>Age:</span> 21</p>
                </div>
            </div>

        <div>
        <div className='sm:ml-48'>
            <div  className='skill'>
                <div className='flex'>
                    <Canvas className='w-full h-full min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Star
                            scale={sizes.starScale}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal  pr-20'>
                        Skills
                    </p>
                </div>
                <AboutItems aboutItems={aboutSkills}/>
            </div>
            <div>
                <div className=' flex'>
                    <Canvas className='w-full h-full  min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <GraduationHat 
                            scale={sizes.hatScale}
                            rotation={[Math.PI / 8, 0, 0]}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal '>
                        Education
                    </p>
                </div>
                <AboutItems aboutItems={aboutEducation}/>
            </div>
            <div>
                <div className=' flex'>
                    <Canvas className='w-full h-full  min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Diamond 
                            scale={sizes.diamondScale}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal '>
                        Experience
                    </p>
                </div>
                <AboutItems aboutItems={aboutExperience}/>
            </div>
            </div>
        </div>
            
            
        </div>
        </section>
    )
}

export default About
