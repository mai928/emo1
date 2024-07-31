'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation' // Ensure this is included
import "swiper/css/pagination";
import 'swiper/css/autoplay'
import logo from '../../public/assets/logo.png';
import Image from 'next/image';

const Partner = () => {
    const partner = [
        {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo2.png'
        }, {
            img: '/assets/logo.jpg'
        }, {
            img: '/assets/emoco-remove.png'
        }, {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo2.png'
        }, {
            img: '/assets/logo.jpg'
        }, {
            img: '/assets/emoco-remove.png'
        },
        {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo.png'
        },
        {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo.png'
        }, {
            img: '/assets/logo.png'
        }
    ]



    const breakpoints = {
        // when window width is >= 320px
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
             centeredSlides: true,

        },
       
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
            , centeredSlides: true,

        },
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
            centeredSlides: true,
        },
        // when window width is >= 480px

        // when window width is >= 640px

        // when window width is >= 1024px


    }

    // const breakpoints = {
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 20,

    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 10,

    //     },
    //     320: {
    //         slidesPerView: 3,
    //         spaceBetween: 10,

    //     },
    //     310: {
    //         slidesPerView: 2,
    //         spaceBetween: 10,

    //     },
    // };
    return (
        <section className='px-5 lg:px-20 '>
            <Swiper
                slidesPerView={4}
                spaceBetween={60}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={breakpoints}
            >
                {partner.map((item, index) => (
                    <SwiperSlide key={index} className="">
                        <div>
                            <img alt={`Logo ${index}`} className='w-36' src={item.img} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Partner