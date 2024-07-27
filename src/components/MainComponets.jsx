import React from 'react'

const MainComponets = () => {
  return (
   <div className='relative w-full h-screen lg:h-full z-0'>
        <video
          className=" w-full h-full object-contain"
          src='/video/swim.mp4'
          autoPlay
          loop
          muted
        />
        <div className='absolute top-0 left-0 bg-opacity-50 bg-black w-full h-full' />
      </div>
  )
}

export default MainComponets