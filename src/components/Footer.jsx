import React from 'react'
import Partner from './Partner'

const Footer = () => {
    return (
        <section className='bg-opacity-50 bg-black py-2 absolute bottom-0 left-0 w-full text-center'>
          <Partner/>
            <p className='text-white'>designed EMOCO by cangrow @2024</p>
        </section>
    )
}

export default Footer