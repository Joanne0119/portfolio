import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import HiAvatar from '../components/HiAvatar'
import { PerspectiveCamera } from '@react-three/drei'
import { calculateSizes } from '../constant/index.js'
import { useMediaQuery } from 'react-responsive'
import  CanvasLoader  from '../components/CanvasLoader.jsx'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
      } = useForm({
        mode: "onTouched",
      });

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const accessKey = "014f2a47-7037-45d7-8602-511896aaf8f1";
  
    const { submit: onSubmit } = useWeb3Forms({
      access_key: accessKey,
      settings: {
        from_name: "Porfolio Contact Form",
        subject: "New Contact Message from your Website",
        // ... other settings
      },
      onSuccess: (msg, data) => {
        setIsSuccess(true);
        setMessage(msg);
        setShowSuccessMessage(true);
        reset();
      },
      onError: (msg, data) => {
        setIsSuccess(false);
        setMessage(msg);
      },
    });

    const [animationName, setAnimationName] = useState("Idel");

    useEffect(() => {
        console.log(showSuccessMessage);
        if (showSuccessMessage) {
            console.log("Success message shown"); // Debugging
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);  // Hide the success message after 3 seconds
                console.log("Success message hidden"); // Debugging
            }, 2500)
            return () => clearTimeout(timer); 
        }
    }, [showSuccessMessage]);

    return (
        <section className='my-10 mx-20' id="contact">
        <h1 className='head-text'>Contact</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-8'>
            <div className='bg-white py-10 px-10 rounded-xl shadow-xl overflow-hidden mx-10 my-5 min-w-60'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 gap-5 items-center'>
                        <div className='field'>
                            <label className='field-label' htmlFor='name'>Name</label>
                            <input className='field-input' type='text' id='name' {...register("name", { required: true })}/>
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='email'>Email</label>
                            <input className='field-input' type='email' id='email' {...register("eml", { required: true })}/>
                        </div>
                        <div className='field'>
                            <label className='field-label' htmlFor='message'>Message</label>
                            <textarea className='field-input resize-none h-40' id='message' {...register("message", { required: true })}/>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <ul className='inline-flex mt-8 items-center'>
                            <li>
                                <a href='mailto:joanneliu0119@gmail.com' target='_blank' >
                                    <img src='../public/assets/mail.svg' alt='github' className='sm:w-5 h-auto object-contain sm:min-w-5 sm:min-h-5 mx-2 w-4 min-w-4 min-h-4'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/Joanne0119' target='_blank' >
                                    <img src='../public/assets/github_black.svg' alt='github' className='sm:w-5 h-auto object-contain sm:min-w-5 sm:min-h-5 mx-2 w-4 min-w-4 min-h-4'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/joanneliu0119/' target='_blank' >
                                    <img src='../public/assets/instagram.svg' alt='github' className='sm:w-5 h-auto object-contain sm:min-w-5 sm:min-h-5 mx-2 w-4 min-w-4 min-h-4'/>
                                </a>
                            </li>
                            
                        </ul>
                        <button 
                            type='submit' 
                            className='inline-flex mt-8 sm:text-xl text-lg text-white bg-sky-950 px-8 py-3 rounded-lg font-generalsans font-medium mt-5 justify-center'
                            onPointerOver={() => setAnimationName('Hi')} onPointerOut={() => setAnimationName('Idel')}
                            >
                            Submit
                        </button>
                    </div>
                    {isSubmitting && (
                    <div className="mt-3 text-sm text-center text-sky-950">
                        Submitting...
                    </div>
                    )}
                    {!isSubmitting && isSubmitSuccessful && isSuccess && (
                    <div className={`mt-3 text-sm text-center text-green-500 flex gap-2 items-center ${showSuccessMessage ? "opacity-100" : "opacity-0 transition-opacity duration-300"}`}>
                        <iframe src="https://lottie.host/embed/ef6ef893-54ad-41dc-b729-83ea5994c530/I00VNM9QkT.json" className='w-6 h-6'></iframe>
                        {message || "Success! Message sent successfully"}
                    </div>
                    )}
                    {!isSubmitting && isSubmitSuccessful && !isSuccess && (
                    <div className="mt-3 text-sm text-center text-red-500 flex gap-2 items-center">
                        <iframe src="https://lottie.host/embed/e677dc60-a3df-41f9-9481-b6ccd9bd6fed/bztxVF0KvD.json" className='w-6 h-6'></iframe>
                        {message || "Something went wrong. Please try later."}
                    </div>
                    )}
                </form>
            </div>
            <div className=' min-w-52'  onPointerOver={() => setAnimationName('Hi')} onPointerOut={() => setAnimationName('Idel')}>
                <Canvas className='w-full h-full min-w-52'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HiAvatar
                                scale={sizes.hiAvatarScale} 
                                position={sizes.hiAvatarPosition} 
                                animationName={animationName}
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
