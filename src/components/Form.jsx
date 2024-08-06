import React from 'react'

const Form = () => {
    return (
        <form className=' w-full lg:w-2/3 pb-10 lg:pb-0 '>
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
        </form>)
}

export default Form