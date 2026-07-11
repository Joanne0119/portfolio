import React, { useEffect, useRef } from 'react'
import Star from '../components/Star.jsx'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, View } from '@react-three/drei'
import GraduationHat from '../components/GraduationHat.jsx'
import Diamond from '../components/Diamond.jsx'
import Award from '../components/Award.jsx'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n/LanguageContext.jsx'

gsap.registerPlugin(ScrollTrigger)

const renderMarkdown = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <span key={idx} className='font-bold'>{part.slice(2, -2)}</span>;
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
};

const AboutList = ({ items }) => (
    <ul className='mx-10'>
        {items.map((item, idx) => {
            const isString = typeof item === 'string';
            const text = isString ? item : item.name;
            const date = isString ? null : item.date;
            const degree = isString ? null : item.degree;
            return (
                <li key={idx} className='about-li'>
                    <img src='/assets/dount.png' alt='' className='w-5 h-auto object-contain min-w-5 min-h-5 mt-1'/>
                    <div className='flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1'>
                        <div className='flex-1 flex flex-wrap items-baseline gap-2'>
                            {degree && (
                                <span className='inline-block bg-sky-950 text-white text-xs font-bold px-2 py-0.5 rounded-md shrink-0 translate-y-[-2px]'>
                                    {degree}
                                </span>
                            )}
                            <p>{renderMarkdown(text)}</p>
                        </div>
                        {date && (
                            <p className='sm:text-base text-sm text-sky-700 whitespace-nowrap shrink-0 sm:ml-4 sm:mt-1'>
                                {date}
                            </p>
                        )}
                    </div>
                </li>
            );
        })}
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

const IconTitle = ({ slotRef, title }) => (
    <div className='flex'>
        <div ref={slotRef} className='w-full h-20 min-w-12 max-w-20 inline' />
        <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal'>
            {title}
        </p>
    </div>
)

const AboutSection = ({ slotRef, title, items }) => (
    <div>
        <IconTitle slotRef={slotRef} title={title} />
        <AboutList items={items} />
    </div>
)

const NameBirthField = ({ label, value }) => (
    <div className='mb-4'>
        <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-medium'>{label}</p>
        <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold'>{value}</p>
    </div>
)

const IconLights = () => (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
    </>
)

const About = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const aboutRef = useRef(null)
    const starRef = useRef(null)
    const hatRef = useRef(null)
    const diamondRef = useRef(null)
    const awardRef = useRef(null)
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
        <section id='about' ref={aboutRef} className='relative bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden sm:mx-16 mx-4'>
            <h1 className='head-text'>{t('about.title')}</h1>
            <div className='grid grid-cols-1 sm:p-8'>
                <div className='flex sm:flex-row flex-col gap-8 items-center'>
                    <div className='h-auto max-h-60 min-h-32 min-w-32 rounded-lg overflow-hidden'>
                        <img className='rounded-xl w-auto h-full max-h-60 min-h-32 min-w-32 object-cover' src='/assets/me.png' alt=''/>
                    </div>
                    <div className='sm:inline-flex sm:gap-10 flex-row'>
                        <NameBirthField label={t('about.nameLabel')} value={t('about.nameValue')} />
                        <NameBirthField label={t('about.birthLabel')} value={t('about.birthValue')} />
                    </div>
                </div>
                <div className='sm:py-10 sm:px-6 py-5 px-2 text-balance xl:text-lg md:text-lg sm:text-md text-md font-generalsans text-left text-sky-950'>
                    <RichDescription segments={description} />
                </div>

                <div className='sm:ml-10'>
                    <div className='skill'>
                        <IconTitle slotRef={starRef} title={t('about.skills')} />
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

                    <AboutSection slotRef={hatRef} title={t('about.education')} items={educationList} />
                    <AboutSection slotRef={diamondRef} title={t('about.workExperience')} items={workList} />
                    <AboutSection slotRef={awardRef} title={t('about.competitionExperience')} items={competitionList} />
                </div>
            </div>

            <Canvas
                className='pointer-events-none'
                style={{ position: 'absolute', inset: 0 }}
                eventSource={aboutRef}
            >
                <View index={1} track={starRef}>
                    <IconLights />
                    <Star scale={sizes.starScale} />
                </View>
                <View index={2} track={hatRef}>
                    <IconLights />
                    <GraduationHat scale={sizes.hatScale} rotation={[Math.PI / 8, 0, 0]} />
                </View>
                <View index={3} track={diamondRef}>
                    <IconLights />
                    <Diamond scale={sizes.diamondScale} />
                </View>
                <View index={4} track={awardRef}>
                    <IconLights />
                    <Award scale={sizes.awardScale} />
                </View>
            </Canvas>
        </section>
    )
}

export default About
