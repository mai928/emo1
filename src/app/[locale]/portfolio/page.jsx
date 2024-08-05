'use client'
import { portfolio } from '@/data/data'
import Image from 'next/image'
import React, { useState } from 'react'

const OurPortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCatgory, setActive] = useState(false)

    const handleCatagory = (id) => {
        setActiveIndex(id)
        setActive(true)
    }

    return (
        <section className='h-full relative  w-full'>
            <div className='relative'>
                <div >
                    <Image alt='img' width={500} height={600} className='bg_img h-[70vb] lg:h-full' src='/assets/web2.jpg' />

                </div>
                <h1 className='absolute bottom-32 start-96 text-2xl lg:text-5xl  text-white'>Our Portfolio</h1>

            </div>
            <div className='block lg:flex justify-between gap-20 px-5 lg:px-28 py-20'>
                <Image width={500} height={600} className='bg_img' alt='img' src='/assets/about.jpg' />
                <div>
                    <h2 className='text-4xl font-bold  '>
                        We Are Swimming Pool Builders and Swimming Pool Service Experts
                    </h2>
                    <p className='text-gray-600 py-10'>“EMOCO” as its presently known was established in 2000, however it’s considered a more developed generation of the former individual enterprise “The Electromechanical Office for Engineering Works – EMO”which was founded and managed by Eng. Mamdouh El-Saied in1995 but was later terminated by the end of year 2000 when EMOCO emerged. Since its foundation.
                        EMOCO has met the growing needs of the Egyptian market and has become the leader in its field. It has successfully gained its customer respect and trust, known for its high level of technical capability, professionalism & flexible pricing policy.
                        <br />
                        EMOCO has get use of the long accumulated and extensive experiences and know how gained from over 25 years of extensive working experiences in the market. We do believe that the well planned and good engineered projects -if supervised with experienced and professional project management- should meet the best execution performance, the optimum cost effectiveness and accordingly customer satisfaction and success on the long term. Based on this concept, EMOCO has invested both financial and human resources to build a back-bone of technical know-how and supporting engineering facilities to fulfill this part of our commitments towards our customers.</p>
                </div>
            </div>
            <div className='text-center px-28'>
                <p className='text-4xl font-bold py-3'>Pool Models </p>
                <div className='flex justify-between items-center pb-32 px-28'>
                    {
                        portfolio.map((item, index) => (
                            <div onClick={() => handleCatagory(index)} key={index} className={`text-center cursor-pointer ${activeCatgory === true ? 'text-black' : 'text-gray-600'}`}>
                                <div className={`${activeCatgory === true && index === activeIndex ? 'fill-black' : 'fill-gray-600'}`}> {item.icon}</div>
                                <p className={`py-2 text-sm font-semibold ${activeCatgory === true && index === activeIndex ? 'text-black' : 'text-gray-600'}`}>{item.name}</p>

                            </div>
                        ))
                    }
                </div>

                <div>
                    {
                        portfolio.map((items, index) => (
                            <div>
                                {items.Catagory && activeIndex === index && (
                                    <div className='flex gap-32 '>
                                        {
                                            items.Catagory.map((sub) => (
                                                <div className='flex w-full gap-14'>
                                                    <p className='w-1/3'>{sub.desc}</p>

                                                    <div className='flex gap-10 w-2/3'>{
                                                        sub.subcatagory.map((item) => (
                                                            <div>
                                                                <Image alt='img' width={300} height={300} src={item.image} />
                                                                <p>{item.title}</p>
                                                            </div>
                                                        ))
                                                    }</div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                )}

                            </div>
                        ))
                    }
                </div>
            </div>


        </section>
    )
}

export default OurPortfolio



// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7l0 96.3 192 0 0-96.3C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7L448 361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3c0 0 0 0 0 0l0-96.5-192 0 0 96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1l0-233.3zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z"/></svg>