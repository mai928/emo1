'use client'
import React, { useState } from 'react';
import { navbar } from '@/data/data';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className='relative w-full h-screen bg-ground'>
      <div className='relative w-full h-full z-0'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src='/video/swim.mp4'
          autoPlay
          loop
          muted
        />
        <div className='absolute top-0 left-0 bg-opacity-50 bg-black w-full h-full' />
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <div className='flex h-full'>
          <div className='w-[20%] min-h-full border-r-[1px] border-white'>
           
           <div className='mt-10'>
             {navbar.map((item, index) => (
              <div key={index}>
                <ul className='cursor-pointer' onClick={() => handleClick(item.id)}>
                  <li className='text-white font-bold my-3'>{item.name}</li>
                </ul>
              </div>
            ))}
            </div>

            <div>
              {
                navbar.map((item) => (
                  <div>
                    {activeIndex === item.id && item.subcatagory && (
                      <div className='ml-4'>
                        {item.subcatagory.map((subitem, subindex) => (
                          <ul className='cursor-pointer' key={subindex}>
                            <li className='text-white my-2'>{subitem.title}</li>
                          </ul>
                        ))}
                      </div>
                    )}

                  </div>
                ))
              }

            </div>

          </div>
          <div className='w-[80%] p-10'>
            <p className='text-white'>mai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
