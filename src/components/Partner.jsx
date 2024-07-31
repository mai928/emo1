'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import logo from '../../public/assets/logo.png';
import Image from 'next/image';

const Partner = () => {
    const partner = [
        {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        },
        {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        }, {
            img: logo
        }
    ]

    const breakpoints = {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };
    return (
        <section className='px-20'>
            <Swiper 
            className='static'
            slidesPerView={8}
            loop={true}
            effect='slide'
            autoplay={{ delay: 5000 }}
            breakpoints={breakpoints}
            modules={[Navigation, Autoplay, Pagination]}

            >
                {
                    partner.map((item ,index)=>(
                      <SwiperSlide key={index}>
                        <Image width={150} src={item.img}/>
                      </SwiperSlide>   
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Partner