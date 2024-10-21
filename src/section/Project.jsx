import React, { useEffect, useRef} from 'react'
import { projectInfo} from '../constant/index.js'
import gsap from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectDetials from '../components/ProjectDetials.jsx'


gsap.registerPlugin(ScrollTrigger)

const Project = () => {
    const projectRef = useRef(null)

    useEffect(() => {
        const project = projectRef.current;


          gsap.fromTo(project, 
            { y: 100 },  
            { y: 0, duration: 1.5, ease: 'power3.out', 
              scrollTrigger: {
                trigger: project,
                start: 'top-100 bottom-=100',
                end: 'bottom bottom-=180',
                scrub: true,
              }
            }
          );
    }, []) 

    return (
        <section id='projects' className='mt-16 mx-20 relative' ref={projectRef}>
            <h1 className='head-text sticky top-0'>Projects</h1>
            
            <div >
            {
                projectInfo.map((project) => (
                    <ProjectDetials 
                        currentProject={project}
                        key={project.id} 
                    />
                ))
                
            }
            </div>
            
            
        </section>
    )
}

export default Project
