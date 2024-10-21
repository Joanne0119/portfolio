import React, { useEffect, useRef } from 'react'
import { aboutCode, aboutTools, aboutEducation, aboutExperience } from '../constant/index.js'
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
        <section id='about' ref={aboutRef} className='bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden sm:mx-16 mx-4'>
        <h1 className='head-text'>About</h1>
        <div className='grid grid-cols-1 sm:p-8'>
            <div className='flex sm:flex-row flex-col gap-8 items-center'>
                <div className='h-auto max-h-60 min-h-32 min-w-32 rounded-lg overflow-hidden'>
                    <img className='rounded-xl w-auto h-full max-h-60 min-h-32 min-w-32 object-cover' src='../public/assets/me.png' alt=''/>
                </div>
                <div className='sm:inline-flex sm:gap-10 flex-row'>
                    <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold mb-4'>
                        <span className='font-medium'>Name:</span> 
                        <br/>Cheng En, Liu (Joanne)</p>
                    <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold mb-4'>
                        <span className='font-medium'>Birth:</span>
                        <br/> January 19, 2004</p>
                </div>
            </div>
            <div className='sm:py-10 sm:px-6 py-5 px-2 text-balance xl:text-lg md:text-lg sm:text-md text-md font-generalsans text-left text-sky-950'>
                I am Joanne, a proactive individual with <span className='font-bold'>over 3 years of web development experience, specializing in front-end technologies</span> like JavaScript,React and CSS. I enjoy <span className='font-bold'>building interactive websites and apps.</span> I am currently expanding my skills in back-end and AI to bring more innovation to my projects.
            </div>
        <div>
        <div className='sm:ml-10'>
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
                <div className='flex flex-col gap-5 md:gap-20 md:flex-row'>
                    <div>
                        <p className='inline xl:text-xl md:text-xl sm:text-lg text-lg font-generalsans font-bold text-sky-950 pl-10'>Programming Languages</p>
                        <AboutItems aboutItems={aboutCode}/>
                    </div>
                    <div>
                        <p className='inline xl:text-xl md:text-xl sm:text-lg text-lg font-generalsans font-bold text-sky-950 pl-10'>Frameworks & Tools</p>
                        <AboutItems aboutItems={aboutTools}/>
                    </div>
                </div>
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
