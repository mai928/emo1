import React from 'react'

const MainVideo = () => {
  return (
    <div className='w-full h-screen z-0  relative'>
      <video
        className=" w-full h-full absolute top-0 left-0 object-cover"
        src='/video/main.mp4'
        autoPlay
        loop
        muted
      />
      <div className='absolute left-0 top-[50%]  bg-opacity-40 bg-footer_color w-full h-[10%] lg:h-[20%]' >
        <h1 className='font-shelley text-white text-4xl lg:text-9xl  2xl:text-9xl  left-[26%] bottom-[8%] absolute text-auto-complete'>leading the stream</h1>
      </div>
    </div>
    )
}

export default MainVideo