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

    const skillRef = useRef(null)
    const eduRef = useRef(null)
    const expRef = useRef(null)
    useEffect(() => {
        const skill = skillRef.current;
        const edu = eduRef.current;
        const exp = expRef.current;

        gsap.fromTo(skill, 
            { x: -250, opacity: 0.5 },  
            { x: 0, opacity: 1, duration: 5, ease: 'power1.out', 
              scrollTrigger: {
                trigger: skill,
                start: 'top bottom-=200',
                end: 'bottom bottom-=180',
                scrub: true,
              }
            }
          )

          gsap.fromTo(edu, 
            { x: -250, opacity: 0.5 },  
            { x: 0, opacity: 1, duration: 5, ease: 'power1.out', 
              scrollTrigger: {
                trigger: edu,
                start: 'top bottom-=200',
                end: 'bottom bottom-=180',
                scrub: true,
              }
            }
          )

          gsap.fromTo(exp, 
            { x: -250, opacity: 0.5 },  
            { x: 0, opacity: 1, duration: 5, ease: 'power1.out', 
              scrollTrigger: {
                trigger: exp,
                start: 'top bottom-=200',
                end: 'bottom bottom-=180',
                scrub: true,
              }
            }
          );
    }, [])


    return (
        <section>
        <h1 className='head-text'>About</h1>
        <div className='grid grid-cols-1 p-10'>
            <div className='flex gap-8 border items-center'>
                <div className='border h-auto max-h-60 min-h-32 min-w-32'>
                    <img className='rounded-lg w-auto h-full max-h-60 min-h-32 min-w-32 object-cover' src='../public/assets/me.png' alt=''/>
                </div>
                <div className='inline-flex gap-5'>
                    <p><span className='font-medium'>Name:</span> Joanne Liu</p>
                    <p><span className='font-medium'>Age:</span> 21</p>
                </div>
            </div>

            <div >
                <div ref={skillRef} className='skill'>
                    <div className='border flex'>
                        <Canvas className='w-full h-full border min-w-12 max-w-20 inline'>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <Star
                                scale={sizes.starScale}
                            />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 10]} intensity={2}/>
                        
                        </Canvas>
                        
                        <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal border pr-20'>
                            Skills
                        </p>
                    </div>
                    <AboutItems aboutItems={aboutSkills}/>
            </div>
            <div ref={eduRef}>
                <div className='border flex'>
                    <Canvas className='w-full h-full border min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <GraduationHat 
                            scale={sizes.hatScale}
                            rotation={[Math.PI / 8, 0, 0]}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal border'>
                        Education
                    </p>
                </div>
                <AboutItems aboutItems={aboutEducation}/>
            </div>
            <div ref={expRef}>
                <div className='border flex'>
                    <Canvas className='w-full h-full border min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Diamond 
                            scale={sizes.diamondScale}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal border'>
                        Experience
                    </p>
                </div>
                <AboutItems aboutItems={aboutExperience}/>
            </div>
            </div>
            
        </div>
        </section>
    )
}

export default About
