import Link from 'next/link';
import React from 'react'

const Services = () => {

    const servesData = [
        {
            id: 1,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
        {
            id: 2,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
        {
            id: 3,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
        {
            id: 4,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
        ,
        {
            id: 5,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
        ,
        {
            id: 6,
            src: '/assets/service1.jpg',
            title: "Test-Bottle",
            desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
        },
    ];
    return (
        <section className='h-full   w-full'>
            <div className='relative'>
                <div >
                    <img className='w-full h-[70vb] lg:h-full' src='/assets/web2.jpg' />

                </div>
                <h1 className='absolute left-28 bottom-24 lg:bottom-32 lg:start-96 text-3xl lg:text-5xl  text-white'>Our Services</h1>

            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-16 lg:px-28 py-20'>
                {
                    servesData.map((item) => (
                        <div className='border-[2px] border-solid border-gray-200 rounded-lg bg-slate-100'>
                            <img className='rounded-t-lg' src={item.src} />
                            <div className='ms-3 my-5'>
                                <h3 className='font-bold'>{item.title}</h3>
                                <p className='text-[15px]  py-3 text-gray-700 font-semibold'>{item.desc}</p>
                                <Link className='flex justify-center' href={'/'}>
                                    <svg className='bg-secondary_color fill-white px-2 rounded-full ' width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Services