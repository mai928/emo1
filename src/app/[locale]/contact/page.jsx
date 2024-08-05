import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='bg-white h-full  '>
      <div className='relative'>
        <div >
        <Image alt='img' width={500} height={600} className='bg_img h-[70vb] lg:h-full' src='/assets/web2.jpg' />

        </div>
        <h1 className='absolute bottom-32 start-96 text-2xl lg:text-5xl  text-white'>Contact Us</h1>

      </div>

      <div className='pt-10 pb-20'>



        <div className=' block lg:flex gap-10 items-center px-5 lg:px-32 pt-10'>
          {/* contact info */}

          <div className='w-full ps-10 lg:ps-0 lg:w-1/3'>
            {/* phone */}
            <div className='flex items-center gap-5'>
              
              <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} className='fill-secondary_color ' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />

              <div className='text-slate-800'>
                <p className='font-semibold'>Address</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>2 El-Obour St., Salah Salem Road, Nasr City, Cairo. P.Code # 11371.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-5 mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='fill-secondary_color' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />

              <div className='text-slate-800'>
              <p className='font-semibold'>Email</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>emoco@emocoegypt.com</p>
              </div>

            </div>

            <div className='flex items-center gap-5 mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='fill-secondary_color' viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />
              <div className='text-slate-800'>
              <p className='font-semibold'>Phone</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>+202 22612118 </p>
              </div>

            </div>

          </div>

          <form className=' w-full lg:w-2/3   '>
            <div className='text-center'>
              <p className='text-slate-500  font-semibold'><span className='text-secondary_color text-2xl '>CONTACT</span> US</p>
              <p className='text-gray-500 text-sm my-1'>If you have question , feel free to get in touch</p>
              <div className='flex items-center justify-center mt-3'>
                <div className='border-[1px] border-solid border-gray-500 w-96' />
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='fill-gray-400 ' viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                <div className='border-[1px] border-solid border-gray-500 w-96' />

              </div>

            </div>
            <div className=' block lg:flex gap-10 my-5'>
              <input className='bg-white py-2  rounded-lg outline-none border-[1px] border-solid border-gray-400 w-full px-3' placeholder='Name' />
              <input className='bg-white py-2  rounded-lg outline-none border-[1px] border-solid border-gray-400 w-full mt-7 lg:mt-0 px-3' placeholder='Phone' />
            </div>


            <input className='bg-white py-2  rounded-lg outline-none border-[1px] border-solid border-gray-400 my-3 w-full px-3' placeholder='Email' />
            <div className='py-5'>
              <textarea cols={30} className='bg-white py-2  rounded-lg outline-none border-[1px] border-solid border-gray-400 w-full px-3' placeholder='Message' />


            </div>
            <div className='text-center lg:text-end mt-4'>
              <button className='cursor-pointer border-[1px] rounded-lg border-solid   bg-secondary_color hover:bg-slate-700  text-white py-2 px-20 '>SEND</button>

            </div>
          </form>
        </div>

        <div className='py-10'>
          <div><iframe loading='lazy' className='w-[80%] h-[600px] m-auto' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20El-Obour%20St.,%20Salah%20Salem%20Road,%20Nasr%20City,%20Cairo.+(Emoco%20Egypt)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
        </div>
      </div>


    </section>
  )
}

export default Contact