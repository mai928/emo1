'use client';
import React, { useEffect, useState } from 'react';
import { navbar } from '@/data/data';
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveIndex(id);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const [toggle, setToggle] = useState(false)
  const [showmenuIcon, setshowmenuIcon] = useState(false)

  useEffect(() => {

    const handleSize = () => {
      if (window.innerWidth <= 1024) {
        setToggle(false)
        setshowmenuIcon(true)
      } else {
        setshowmenuIcon(false)

      }
    }


    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, [])



  return (
    <section className='bg-black px-5 lg:px-40 py-3'>
      {
        showmenuIcon === true ?
          (
            <div className='flex  justify-between items-center '>
              <div>
                <Image width={90} src={logo} alt='Logo' />
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' onClick={() => setToggle(!toggle)} width={25} height={25} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>

              </div>

            </div>
          ) : (
            <div className={`flex  items-center ${showmenuIcon === true ? 'gap-20' : 'gap-0'}`}>
              <div>
                <Image width={120} src={logo} alt='Logo' />
              </div>

              <div className='flex flex-1 justify-evenly px-44'>
                {navbar.map((nav,index) => (
                  <div key={nav.id} className='relative' onMouseEnter={() => handleMouseEnter(nav.id)} onMouseLeave={handleMouseLeave}>
                    <ul className='py-2 flex items-center gap-2'>
                      <li className='text-white'>
                        <Link href={nav.path}>{nav.name}</Link>
                      </li>
                      {
                        nav.subcatagory && (<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} className='fill-white' viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" /></svg>)
                      }
                    </ul>
                    {activeIndex === nav.id && nav.subcatagory && (
                      <div className='absolute left-0 top-full bg-black border-[1px] border-solid border-gray-800 rounded-lg  z-20'>
                        {nav.subcatagory.map((item,index) => (
                          <div key={index}>
                            <ul className='py-2 p-5' key={item.title}>
                              <li className={`text-white`} ><Link href={'/'}>{item.title}</Link></li>
                            </ul>

                            <div className={`${'border-b-[1px] border-solid border-gray-500 text-white'}`} />

                          </div>


                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
      }


      {/* sidebar */}
      <div>
        <div className={`sidebar ${toggle ? "open" : ""}`}>
          <div className="p-10">
            <div className="flex justify-between items-end mb-10">
              <Link href={'/'}><Image alt="logo" width={100} height={'auto'} src={logo} /></Link>
              <h1
                className="cursor-pointer p-1 px-3 rounded-full bg-primary_color font-semibold text-white-300"
                onClick={() => setToggle(false)}
              >
                x
              </h1>
            </div>

            <ul>
              {navbar.map((item) => (
                <div key={item.name} className="flex items-center mt-7">
                  <div className="p-1 bg-white-400 rounded-full me-4">
                    <svg

                      xmlns="http://www.w3.org/2000/svg"
                      width={13}
                      height={13}
                      className="fill-primary_color  "
                      viewBox="0 0 320 512"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                  <li>

                    <Link

                      className="text-secondary-500 text-xl font-semibold   hover:text-primary-500"
                      href={item.path}
                      onClick={() => setToggle(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                </div>

              ))}
            </ul>

            <div className="flex items-center mt-7">
              <div className="p-1 bg-white-400 rounded-full me-4">
                <svg

                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={13}
                  className="fill-primary_color  "
                  viewBox="0 0 320 512"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>


              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


// <div className='relative w-full h-screen bg-ground'>
//   <div className='relative w-full h-full z-0'>
//     <video
//       className="absolute top-0 left-0 w-full h-full object-cover"
//       src='/video/swim.mp4'
//       autoPlay
//       loop
//       muted
//     />
//     <div className='absolute top-0 left-0 bg-opacity-50 bg-black w-full h-full' />
//   </div>
//   <div className='absolute top-0 left-0 w-full h-full z-10'>
//     <div className='flex h-full'>
//       <div className='w-[20%] min-h-full border-r-[1px] border-white'>

//        <div className='mt-10'>
//          {navbar.map((item, index) => (
//           <div key={index}>
//             <ul className='cursor-pointer' onClick={() => handleClick(item.id)}>
//               <li className='text-white font-bold my-3'>{item.name}</li>
//             </ul>
//           </div>
//         ))}
//         </div>

//         <div>
//           {
//             navbar.map((item) => (
//               <div>
//                 {activeIndex === item.id && item.subcatagory && (
//                   <div className='ml-4'>
//                     {item.subcatagory.map((subitem, subindex) => (
//                       <ul className='cursor-pointer' key={subindex}>
//                         <li className='text-white my-2'>{subitem.title}</li>
//                       </ul>
//                     ))}
//                   </div>
//                 )}

//               </div>
//             ))
//           }

//         </div>

//       </div>
//       <div className='w-[80%] p-10'>
//         <p className='text-white'>mai</p>
//       </div>
//     </div>
//   </div>
// </div>