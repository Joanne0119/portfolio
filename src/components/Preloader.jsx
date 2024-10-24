import React from 'react'

const Preloader = () => {
  return (
    <div id='preloader' className='flex flex-col justify-center items-center'>
      <iframe className='loader' src="https://lottie.host/embed/c918fc5f-6517-48cf-9b0a-279871ed45f1/CyjVieM6rD.json"></iframe>
      <p className='text-sky-500 text-xl font-generalsans font-bold'>Loading...</p>
    </div>
  )
}

export default Preloader
