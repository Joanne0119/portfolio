import React from 'react'
import { aboutSkills, aboutEducation, aboutExperience } from '../constant/index.js'
import Star from '../components/Star.jsx'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import GraduationHat from '../components/GraduationHat.jsx'
import Diamond from '../components/Diamond.jsx'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'

const AboutItems = (aboutItems) => {
    return (
        <ul className='about-ul'>
            {
                aboutItems.aboutItems.map((item) => (
                    <li key={item.id} className='about-li'>{ item.name }</li>
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
    return (
        <section>
        <h1>About</h1>
        <div className='grid grid-cols-1 p-10'>
            <div className='flex gap-8 border items-center'>
                <div className='border h-60'>
                    <img className='w-auto h-full' src='../public/assets/me.png' alt=''/>
                </div>
                <div className='inline-flex gap-5'>
                    <p><span className='font-medium'>Name:</span> Joanne Liu</p>
                    <p><span className='font-medium'>Age:</span> 21</p>
                </div>
            </div>
            
            <div>
                <div className='border grid grid-cols-2 w-1/4'>
                    <Canvas className='w-full h-full border'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Star/>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    
                    <p className='content-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-bold text-sky-950 !leading-normal'>
                        Skills
                    </p>
                </div>
                <AboutItems aboutItems={aboutSkills}/>
            </div>
            <div>
                <div className='border grid grid-cols-2 w-1/4'>
                    <Canvas className='w-full h-full border'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <GraduationHat 
                            scale={sizes.hatScale}
                            rotation={[Math.PI / 8, 0, 0]}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='content-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-bold text-sky-950 !leading-normal'>
                        Education
                    </p>
                </div>
                <AboutItems aboutItems={aboutEducation}/>
            </div>
            <div>
                <div className='border grid grid-cols-2 w-1/4'>
                    <Canvas className='w-full h-full border'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Diamond 
                            scale={sizes.diamondScale}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    
                    </Canvas>
                    <p className='content-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-bold text-sky-950 !leading-normal'>
                        Experience
                    </p>
                </div>
                <AboutItems aboutItems={aboutExperience}/>
            </div>
        </div>
        </section>
    )
}

export default About
