'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const ModelPortfolio = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCatgory, setActive] = useState(true)

    const handleCatagory = (id) => {
        setActiveIndex(id)
        setActive(true)
    }


    const portfolio = [
        {
            icon:
                '/assets/circle.png'

            // <svg
            //     className={`m-auto ${activeCatgory === true ? 'fill-blue-700' : 'fill-red-600'}`}
            //     width={80}
            //     version="1.1"
            //     id="Capa_1"
            //     xmlns="http://www.w3.org/2000/svg"
            //     xmlnsXlink="http://www.w3.org/1999/xlink"
            //     viewBox="0 0 464 464"
            //     xmlSpace="preserve"
            // >
            //     {/* <g id="SVGRepo_bgCarrier" strokeWidth={0} /> */}
            //     {/* <g
            //         id="SVGRepo_tracerCarrier"
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //     /> */}
            //     <g id="SVGRepo_iconCarrier">
            //         {" "}
            //         <g>
            //             {" "}
            //             <path d="M456,332c-16.126,0-24.544,4.811-31.972,9.054c-6.523,3.728-12.157,6.946-24.034,6.946s-17.511-3.219-24.034-6.946 c-7.428-4.243-15.846-9.054-31.972-9.054c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946 s-17.509-3.219-24.031-6.946c-7.427-4.243-15.844-9.054-31.969-9.054c-16.124,0-24.542,4.811-31.968,9.054 C193.5,344.781,187.868,348,175.993,348s-17.507-3.219-24.029-6.945c-7.426-4.244-15.844-9.055-31.968-9.055 c-3.021,0-5.772,0.169-8.296,0.472V292.2h72.2V316.6c0,4.418,3.582,8,8,8s8-3.582,8-8V132.2c0-27.96,14.391-52.611,36.146-66.97 c22.627,14.917,36.054,39.756,36.054,66.97c0,4.418,3.582,8,8,8s8-3.582,8-8c0-29.657-13.295-56.956-36.076-75.117 C260.767,53.805,270.225,52,280.1,52c44.223,0,80.2,35.978,80.2,80.2c0,4.418,3.582,8,8,8s8-3.582,8-8 c0-53.045-43.155-96.2-96.2-96.2s-96.2,43.155-96.2,96.2V147.6h-72.2V132.2c0-44.223,35.978-80.2,80.2-80.2 c1.846,0,3.715,0.063,5.555,0.189c4.416,0.303,8.226-3.028,8.527-7.437c0.301-4.407-3.028-8.226-7.436-8.526 C196.344,36.076,194.108,36,191.9,36c-53.045,0-96.2,43.155-96.2,96.2v204.777c-2.805,1.299-5.292,2.716-7.672,4.076 C81.505,344.781,75.873,348,63.997,348c-11.875,0-17.507-3.219-24.029-6.946C32.542,336.811,24.124,332,8,332c-4.418,0-8,3.582-8,8 s3.582,8,8,8c11.875,0,17.507,3.219,24.029,6.946C39.456,359.189,47.873,364,63.997,364c16.125,0,24.542-4.811,31.969-9.054 c6.522-3.728,12.155-6.946,24.03-6.946c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054 c16.124,0,24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.029-6.946c11.875,0,17.509,3.219,24.031,6.946 c7.427,4.243,15.844,9.054,31.969,9.054c16.124,0,24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946 c11.877,0,17.511,3.219,24.034,6.946c7.428,4.243,15.846,9.054,31.972,9.054s24.544-4.811,31.972-9.054 C438.489,351.219,444.123,348,456,348c4.418,0,8-3.582,8-8S460.418,332,456,332z M111.7,276.2v-48.3h72.2v48.3H111.7z M183.9,163.6 V211.9h-72.2V163.6H183.9z" />{" "}
            //             <path d="M399.994,380c-11.877,0-17.511-3.219-24.034-6.946c-7.428-4.243-15.846-9.054-31.972-9.054 c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946c-11.876,0-17.509-3.219-24.031-6.946 c-7.427-4.243-15.845-9.054-31.969-9.054s-24.541,4.811-31.968,9.054C193.5,376.781,187.868,380,175.993,380 s-17.507-3.219-24.029-6.946c-7.426-4.243-15.844-9.054-31.968-9.054s-24.542,4.811-31.969,9.054 C81.505,376.781,75.873,380,63.997,380c-4.418,0-8,3.582-8,8s3.582,8,8,8c16.125,0,24.542-4.811,31.969-9.054 c6.522-3.728,12.155-6.946,24.03-6.946c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054 c16.124,0,24.541-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.029-6.946c11.876,0,17.509,3.219,24.031,6.946 c7.427,4.243,15.845,9.054,31.969,9.054s24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946 c11.877,0,17.511,3.219,24.034,6.946c7.428,4.243,15.846,9.054,31.972,9.054c4.418,0,8-3.582,8-8S404.412,380,399.994,380z" />{" "}
            //             <path d="M343.988,396c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946 c-11.876,0-17.509-3.219-24.031-6.946c-7.427-4.243-15.845-9.054-31.969-9.054s-24.542,4.811-31.968,9.054 C193.5,408.781,187.868,412,175.993,412s-17.507-3.219-24.029-6.945c-7.426-4.244-15.844-9.055-31.968-9.055c-4.418,0-8,3.582-8,8 s3.582,8,8,8c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054c16.124,0,24.542-4.811,31.968-9.054 c6.522-3.728,12.155-6.946,24.029-6.946c11.876,0,17.509,3.219,24.031,6.946c7.427,4.243,15.845,9.054,31.969,9.054 s24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946c4.418,0,8-3.582,8-8S348.406,396,343.988,396z" />{" "}
            //         </g>{" "}
            //     </g>
            // </svg>
            ,
            name: "Olymbic pools",
            Catagory: [
                {
                    desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

                    subcatagory: [
                        {
                            image: "/assets/service1.jpg",
                            title: "Meridien Pyramids",
                        },

                        {
                            image: "/assets/service1.jpg",
                            title: "Jaz Alcazer",
                        },
                    ],
                },
            ],
        },
        {
            icon: (
                <svg

                    width={80}
                    className="fill-black m-auto"
                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                // fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".f{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
                                }}
                            />
                        </defs>
                        <circle id="b" className="f" cx={24} cy={24} r="8.5" />
                        <circle id="c" className="f" cx={24} cy={24} r="11.8" />
                        <circle id="d" className="f" cx={24} cy={24} r="18.25" />
                        <circle id="e" className="f" cx={24} cy={24} r="21.5" />
                    </g>
                </svg>
            ),
            name: "Hydro-therapy pools",
            Catagory: [
                {
                    desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

                    subcatagory: [
                        {
                            image: "/assets/service1.jpg",
                            title: "Jaz Alcazer",
                        },
                    ],
                },
            ],
        },
        {
            icon: (
                <svg
                    className="m-auto"
                    fill="#000000"
                    width={80}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 464 464"
                    xmlSpace="preserve"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                            {" "}
                            <path d="M456,332c-16.126,0-24.544,4.811-31.972,9.054c-6.523,3.728-12.157,6.946-24.034,6.946s-17.511-3.219-24.034-6.946 c-7.428-4.243-15.846-9.054-31.972-9.054c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946 s-17.509-3.219-24.031-6.946c-7.427-4.243-15.844-9.054-31.969-9.054c-16.124,0-24.542,4.811-31.968,9.054 C193.5,344.781,187.868,348,175.993,348s-17.507-3.219-24.029-6.945c-7.426-4.244-15.844-9.055-31.968-9.055 c-3.021,0-5.772,0.169-8.296,0.472V292.2h72.2V316.6c0,4.418,3.582,8,8,8s8-3.582,8-8V132.2c0-27.96,14.391-52.611,36.146-66.97 c22.627,14.917,36.054,39.756,36.054,66.97c0,4.418,3.582,8,8,8s8-3.582,8-8c0-29.657-13.295-56.956-36.076-75.117 C260.767,53.805,270.225,52,280.1,52c44.223,0,80.2,35.978,80.2,80.2c0,4.418,3.582,8,8,8s8-3.582,8-8 c0-53.045-43.155-96.2-96.2-96.2s-96.2,43.155-96.2,96.2V147.6h-72.2V132.2c0-44.223,35.978-80.2,80.2-80.2 c1.846,0,3.715,0.063,5.555,0.189c4.416,0.303,8.226-3.028,8.527-7.437c0.301-4.407-3.028-8.226-7.436-8.526 C196.344,36.076,194.108,36,191.9,36c-53.045,0-96.2,43.155-96.2,96.2v204.777c-2.805,1.299-5.292,2.716-7.672,4.076 C81.505,344.781,75.873,348,63.997,348c-11.875,0-17.507-3.219-24.029-6.946C32.542,336.811,24.124,332,8,332c-4.418,0-8,3.582-8,8 s3.582,8,8,8c11.875,0,17.507,3.219,24.029,6.946C39.456,359.189,47.873,364,63.997,364c16.125,0,24.542-4.811,31.969-9.054 c6.522-3.728,12.155-6.946,24.03-6.946c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054 c16.124,0,24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.029-6.946c11.875,0,17.509,3.219,24.031,6.946 c7.427,4.243,15.844,9.054,31.969,9.054c16.124,0,24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946 c11.877,0,17.511,3.219,24.034,6.946c7.428,4.243,15.846,9.054,31.972,9.054s24.544-4.811,31.972-9.054 C438.489,351.219,444.123,348,456,348c4.418,0,8-3.582,8-8S460.418,332,456,332z M111.7,276.2v-48.3h72.2v48.3H111.7z M183.9,163.6 V211.9h-72.2V163.6H183.9z" />{" "}
                            <path d="M399.994,380c-11.877,0-17.511-3.219-24.034-6.946c-7.428-4.243-15.846-9.054-31.972-9.054 c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946c-11.876,0-17.509-3.219-24.031-6.946 c-7.427-4.243-15.845-9.054-31.969-9.054s-24.541,4.811-31.968,9.054C193.5,376.781,187.868,380,175.993,380 s-17.507-3.219-24.029-6.946c-7.426-4.243-15.844-9.054-31.968-9.054s-24.542,4.811-31.969,9.054 C81.505,376.781,75.873,380,63.997,380c-4.418,0-8,3.582-8,8s3.582,8,8,8c16.125,0,24.542-4.811,31.969-9.054 c6.522-3.728,12.155-6.946,24.03-6.946c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054 c16.124,0,24.541-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.029-6.946c11.876,0,17.509,3.219,24.031,6.946 c7.427,4.243,15.845,9.054,31.969,9.054s24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946 c11.877,0,17.511,3.219,24.034,6.946c7.428,4.243,15.846,9.054,31.972,9.054c4.418,0,8-3.582,8-8S404.412,380,399.994,380z" />{" "}
                            <path d="M343.988,396c-16.124,0-24.542,4.811-31.968,9.054c-6.522,3.728-12.155,6.946-24.03,6.946 c-11.876,0-17.509-3.219-24.031-6.946c-7.427-4.243-15.845-9.054-31.969-9.054s-24.542,4.811-31.968,9.054 C193.5,408.781,187.868,412,175.993,412s-17.507-3.219-24.029-6.945c-7.426-4.244-15.844-9.055-31.968-9.055c-4.418,0-8,3.582-8,8 s3.582,8,8,8c11.875,0,17.507,3.219,24.029,6.946c7.426,4.243,15.844,9.054,31.967,9.054c16.124,0,24.542-4.811,31.968-9.054 c6.522-3.728,12.155-6.946,24.029-6.946c11.876,0,17.509,3.219,24.031,6.946c7.427,4.243,15.845,9.054,31.969,9.054 s24.542-4.811,31.968-9.054c6.522-3.728,12.155-6.946,24.03-6.946c4.418,0,8-3.582,8-8S348.406,396,343.988,396z" />{" "}
                        </g>{" "}
                    </g>
                </svg>
            ),
            name: "Artificial Lake",
            Catagory: [
                {
                    desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

                    subcatagory: [
                        {
                            image: "/assets/service1.jpg",
                            title: "Meridien Pyramids",
                        },
                    ],
                },
            ],
        },
        {
            icon: (
                <svg
                    className="m-auto"
                    width={80}

                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".f{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
                                }}
                            />
                        </defs>
                        <circle id="b" className="f" cx={24} cy={24} r="8.5" />
                        <circle id="c" className="f" cx={24} cy={24} r="11.8" />
                        <circle id="d" className="f" cx={24} cy={24} r="18.25" />
                        <circle id="e" className="f" cx={24} cy={24} r="21.5" />
                    </g>
                </svg>
            ),
            name: "Infinity Pool",
            Catagory: [
                {
                    desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

                    subcatagory: [
                        {
                            image: "/assets/service1.jpg",
                            title: "Meridien Pyramids",
                        },

                        {
                            image: "/assets/service1.jpg",
                            title: "Jaz Alcazer",
                        },
                    ],
                },
            ],
        },
        {
            icon: (
                <svg
                    className="m-auto"
                    width={80}

                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".f{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
                                }}
                            />
                        </defs>
                        <circle id="b" className="f" cx={24} cy={24} r="8.5" />
                        <circle id="c" className="f" cx={24} cy={24} r="11.8" />
                        <circle id="d" className="f" cx={24} cy={24} r="18.25" />
                        <circle id="e" className="f" cx={24} cy={24} r="21.5" />
                    </g>
                </svg>
            ),
            name: "Pool With Jacuzi",
            Catagory: [],
        },
        {
            icon: (
                <svg
                    className="m-auto"
                    width={80}

                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".f{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
                                }}
                            />
                        </defs>
                        <circle id="b" className="f" cx={24} cy={24} r="8.5" />
                        <circle id="c" className="f" cx={24} cy={24} r="11.8" />
                        <circle id="d" className="f" cx={24} cy={24} r="18.25" />
                        <circle id="e" className="f" cx={24} cy={24} r="21.5" />
                    </g>
                </svg>
            ),
            name: "Family Pool",
            Catagory: [],
        },
        {
            icon: (
                <svg
                    className="m-auto"
                    width={80}

                    viewBox="0 0 48 48"
                    id="a"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".f{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
                                }}
                            />
                        </defs>
                        <circle id="b" className="f" cx={24} cy={24} r="8.5" />
                        <circle id="c" className="f" cx={24} cy={24} r="11.8" />
                        <circle id="d" className="f" cx={24} cy={24} r="18.25" />
                        <circle id="e" className="f" cx={24} cy={24} r="21.5" />
                    </g>
                </svg>
            ),
            name: "Indoor Pool",
            Catagory: [
                {
                    desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

                    subcatagory: [
                        {
                            image: "/assets/service1.jpg",
                            title: "Meridien Pyramids",
                        },

                        {
                            image: "/assets/service1.jpg",
                            title: "Jaz Alcazer",
                        },
                    ],
                },
            ],
        },
    ];
  return (
    <div className='text-center px-5 lg:px-28'>
    <p className='text-4xl font-bold py-5'>Pool Models </p>


    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7  gap-20 items-center  px-16'>
        {
            portfolio.map((item, index) => (
                <div key={index}>

                    <div onClick={() => {
                        handleCatagory(index)
                        setActive(!false)
                    }} key={index} className={`text-center cursor-pointer ${activeCatgory === true ? 'text-black' : 'text-gray-600'}`}>
                        {/* <div className={`${activeCatgory === true && index === activeIndex && item.Catagory ? 'fill-red-600' : 'fill-blue-900'}`}> {item.icon}</div> */}
                        <Image alt='img' width={100} height={10} className={`m-auto ${activeCatgory === true && index === activeIndex ? 'filter invert-0 brightness-0 font-semibold text-lg'
                            : 'filter grayscale-[100%]'}`} src={item.icon} />
                        <p className={`py-2 text-sm font-semibold ${activeCatgory === true && index === activeIndex ? 'text-black font-semibold text-lg' : 'text-gray-600'}`}>{item.name}</p>

                    </div>

                    <div className='block lg:hidden'>
                    {item.Catagory && activeIndex === index && (
                        <div className=' '>
                            {
                                item.Catagory.map((sub ,index) => (
                                    <div key={ index} className=' block lg:flex w-full gap-14'>
                                        <p className='w-full lg:w-1/3 text-slate-600'>{sub.desc}</p>

                                        <div className=' block lg:flex gap-10 w-full lg:w-2/3'>{
                                            sub.subcatagory.map((item ,index) => (
                                                <div key={index}>
                                                    <Image alt='img' width={500} height={500} src={item.image} />
                                                    <p className='text-xl py-3 font-semibold'>{item.title}</p>
                                                    <div className='my-3'>
                                                        <Link href={'/'} className=' px-5 rounded-md text-white py-2 bg-secondary_color'>More Info</Link>

                                                    </div>
                                                </div>
                                            ))
                                        }</div>

                                    </div>
                                ))
                            }
                        </div>
                    )}

                </div>

                </div>

            ))
        }
    </div>

    <div className='py-20  hidden lg:block'>
        {
            portfolio.map((items, index) => (
                <div key={index} className=''>
                    {items.Catagory && activeIndex === index && (
                        <div className=' '>
                            {
                                items.Catagory.map((sub ,index) => (
                                    <div key={index} className=' block lg:flex w-full gap-14'>
                                        <p className='w-full lg:w-1/3 text-slate-600'>{sub.desc}</p>

                                        <div className=' block lg:flex gap-10 w-full lg:w-2/3'>{
                                            sub.subcatagory.map((item ,index) => (
                                                <div key={index}>
                                                    <Image alt='img' width={500} height={500} src={item.image} />
                                                    <p className='text-xl py-3 font-semibold'>{item.title}</p>
                                                    <div className='my-3'>
                                                        <Link href={'/'} className=' px-5 rounded-md text-white py-2 bg-secondary_color'>More Info</Link>

                                                    </div>
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
</div>  )
}

export default ModelPortfolio