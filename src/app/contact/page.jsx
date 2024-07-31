import React from 'react'

const Contact = () => {
  return (
    <section className='py-32 bg-white lg:h-screen'>
      <div className='text-center'>
        <p className='text-slate-200'><span className='text-primary_color text-2xl '>CONTACT</span> US</p>
        <p className='text-gray-400 text-sm my-1'>If you have question , feel free to get in touch</p>
        <div className='flex items-center justify-center mt-3'>
          <div className='border-[1px] border-solid border-gray-800 w-96' />
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='fill-primary_color ' viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
          <div className='border-[1px] border-solid border-gray-800 w-96' />

        </div>

      </div>

      <div className=' block lg:flex  items-center px-5 lg:px-32 pt-10'>
        {/* contact info */}
        <div className='w-full ps-10 lg:ps-0 lg:w-1/3'>
          {/* phone */}
          <div className='flex items-center gap-7'>
            <div className='text-white text-end'>
              <p>Phone</p>
              <p>01232435536</p>
            </div>
            <div className='border-l-[1px] border-solid border-gray-700 h-14' />
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='fill-primary_color ' viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
          </div>

          <div className='flex items-center gap-7 mt-10'>
            <div className='text-white text-end'>
              <p>Phone</p>
              <p>01232435536</p>
            </div>
            <div className='border-l-[1px] border-solid border-gray-700 h-14' />
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='fill-primary_color ' viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
          </div>

          <div className='flex items-center gap-7 mt-10'>
            <div className='text-white text-end'>
              <p>Phone</p>
              <p>01232435536</p>
            </div>
            <div className='border-l-[1px] border-solid border-gray-700 h-14' />
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className='fill-primary_color ' viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
          </div>

        </div>

        <form className=' w-full lg:w-2/3  mt-10 lg:mt-5'>
          <div className=' block lg:flex gap-10 my-5'>
            <input className='bg-black outline-none border-b-[1px] border-solid border-gray-600 w-full' placeholder='Name' />
            <input className='bg-black outline-none border-b-[1px] border-solid border-gray-600 w-full mt-7 lg:mt-0' placeholder='Phone' />
          </div>


          <input className='bg-black outline-none border-b-[1px] border-solid border-gray-600 my-3 w-full' placeholder='Email' />
          <div className='py-5'>
            <textarea cols={30} className='bg-black outline-none border-b-[1px] border-solid border-gray-600  w-full' placeholder='Message' />


          </div>
          <div className='text-center lg:text-end mt-4'>
            <button className='border-[1px] border-solid border-gray-500  text-gray-400 py-2 px-20 '>SEND</button>

          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact