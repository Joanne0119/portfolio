import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HiAvatar from '../components/HiAvatar'
import { PerspectiveCamera } from '@react-three/drei'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import  CanvasLoader  from '../components/CanvasLoader.jsx'

const Contact = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='mt-10 mx-10'>
        <h1 className='head-text'>Contact</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-8'>
            <div className='bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden mx-10 my-5 min-w-60'>
                <form>
                    <div className='grid grid-cols-1 gap-5 items-center'>
                        <div className='field'>
                            <label className='field-label'>Name</label>
                            <input className='field-input' type='text' placeholder='Enter your name' />
                        </div>
                        <div className='field'>
                            <label className='field-label'>Email</label>
                            <input className='field-input' type='email' placeholder='Enter your email' />
                        </div>
                        <div className='field'>
                            <label className='field-label'>Message</label>
                            <textarea className='field-input' placeholder='Enter your message' />
                        </div>
                    </div>
                    <button className='inline-flex mt-8 sm:text-xl text-lg text-white bg-sky-950 px-8 py-3 rounded-lg font-generalsans font-medium mt-5 justify-center'>
                        Submit
                    </button>
                </form>
            </div>
            <div className=' min-w-52'>
                <Canvas className='w-full h-full min-w-52 border'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HiAvatar
                                scale={sizes.hiAvatarScale} 
                                position={sizes.hiAvatarPosition} 
                            />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={2}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
        
            
        </section>
    )
}

export default Contact
