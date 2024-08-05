import Image from 'next/image'
import React from 'react'

const ServiceDetails = () => {
  return (
    <section>
         <div className='relative w-full h-[55vh] lg:h-[60vh] '>
    <Image
        src='/assets/web2.jpg'
        alt='img'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='w-full h-full'
        sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
      />
      <h1 className='absolute left-7 bottom-20 lg:bottom-32 lg:start-96 text-3xl lg:text-5xl text-white font-semibold'>
        Contact Us
      </h1>
    </div>
    </section>
  )
}

export default ServiceDetails