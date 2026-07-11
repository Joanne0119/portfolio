import React, { useEffect, useRef } from 'react'
import Star from '../components/Star.jsx'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import GraduationHat from '../components/GraduationHat.jsx'
import Diamond from '../components/Diamond.jsx'
import Award from '../components/Award.jsx'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

const AboutList = ({ items }) => (
    <ul className='mx-10'>
        {items.map((name, idx) => (
            <li key={idx} className='about-li'>
                <img src='/assets/dount.png' alt='' className='w-5 h-auto object-contain min-w-5 min-h-5'/>
                <p>{name}</p>
            </li>
        ))}
    </ul>
)

const RichDescription = ({ segments }) => (
    <>
        {segments.map((seg, idx) =>
            seg.bold ? (
                <span key={idx} className='font-bold'>{seg.text}</span>
            ) : (
                <React.Fragment key={idx}>{seg.text}</React.Fragment>
            )
        )}
    </>
)

const About = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const aboutRef = useRef(null)
    const { t } = useLanguage();

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

    const description = t('about.description');
    const code = t('about.code');
    const tools = t('about.tools');
    const educationList = t('about.educationList');
    const workList = t('about.workList');
    const competitionList = t('about.competitionList');

    return (
        <section id='about' ref={aboutRef} className='bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden sm:mx-16 mx-4'>
        <h1 className='head-text'>{t('about.title')}</h1>
        <div className='grid grid-cols-1 sm:p-8'>
            <div className='flex sm:flex-row flex-col gap-8 items-center'>
                <div className='h-auto max-h-60 min-h-32 min-w-32 rounded-lg overflow-hidden'>
                    <img className='rounded-xl w-auto h-full max-h-60 min-h-32 min-w-32 object-cover' src='/assets/me.png' alt=''/>
                </div>
                <div className='sm:inline-flex sm:gap-10 flex-row'>
                    <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold mb-4'>
                        <span className='font-medium'>{t('about.nameLabel')}</span>
                        <br/>{t('about.nameValue')}</p>
                    <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold mb-4'>
                        <span className='font-medium'>{t('about.birthLabel')}</span>
                        <br/> {t('about.birthValue')}</p>
                </div>
            </div>
            <div className='sm:py-10 sm:px-6 py-5 px-2 text-balance xl:text-lg md:text-lg sm:text-md text-md font-generalsans text-left text-sky-950'>
                <RichDescription segments={description} />
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
                        {t('about.skills')}
                    </p>
                </div>
                <div className='flex flex-col gap-5 md:gap-20 md:flex-row'>
                    <div>
                        <p className='inline xl:text-xl md:text-xl sm:text-lg text-lg font-generalsans font-bold text-sky-950 pl-10'>{t('about.programmingLanguages')}</p>
                        <AboutList items={code}/>
                    </div>
                    <div>
                        <p className='inline xl:text-xl md:text-xl sm:text-lg text-lg font-generalsans font-bold text-sky-950 pl-10'>{t('about.frameworksAndTools')}</p>
                        <AboutList items={tools}/>
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
                        {t('about.education')}
                    </p>
                </div>
                <AboutList items={educationList}/>
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
                        {t('about.workExperience')}
                    </p>
                </div>
                <AboutList items={workList}/>
            </div>
            <div>
                <div className=' flex'>
                    <Canvas className='w-full h-full  min-w-12 max-w-20 inline'>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <Award
                            scale={sizes.awardScale}
                        />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>

                    </Canvas>
                    <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal '>
                        {t('about.competitionExperience')}
                    </p>
                </div>
                <AboutList items={competitionList}/>
            </div>
            </div>
        </div>


        </div>
        </section>
    )
}

export default About
