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

const IconTitle = ({ children, title }) => (
    <div className='flex'>
        <Canvas className='w-full h-full min-w-12 max-w-20 inline'>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {children}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={2}/>
        </Canvas>
        <p className='inline content-center xl:text-4xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-bold text-sky-950 !leading-normal'>
            {title}
        </p>
    </div>
)

const AboutSection = ({ children, title, items }) => (
    <div>
        <IconTitle title={title}>{children}</IconTitle>
        <AboutList items={items} />
    </div>
)

const NameBirthField = ({ label, value }) => (
    <div className='mb-4'>
        <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-medium'>{label}</p>
        <p className='xl:text-xl md:text-xl sm:text-lg text-lg text-sky-950 font-generalsans font-bold'>{value}</p>
    </div>
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
                        <NameBirthField label={t('about.nameLabel')} value={t('about.nameValue')} />
                        <NameBirthField label={t('about.birthLabel')} value={t('about.birthValue')} />
                    </div>
                </div>
                <div className='sm:py-10 sm:px-6 py-5 px-2 text-balance xl:text-lg md:text-lg sm:text-md text-md font-generalsans text-left text-sky-950'>
                    <RichDescription segments={description} />
                </div>

                <div className='sm:ml-10'>
                    <div className='skill'>
                        <IconTitle title={t('about.skills')}>
                            <Star scale={sizes.starScale} />
                        </IconTitle>
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

                    <AboutSection title={t('about.education')} items={educationList}>
                        <GraduationHat scale={sizes.hatScale} rotation={[Math.PI / 8, 0, 0]} />
                    </AboutSection>

                    <AboutSection title={t('about.workExperience')} items={workList}>
                        <Diamond scale={sizes.diamondScale} />
                    </AboutSection>

                    <AboutSection title={t('about.competitionExperience')} items={competitionList}>
                        <Award scale={sizes.awardScale} />
                    </AboutSection>
                </div>
            </div>
        </section>
    )
}

export default About
