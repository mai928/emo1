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
    const partners = [
        {
            src:'/assets/1.jpg'
           },{
            src:'/assets/2.jpg'
           },{
            src:'/assets/3.jpg'
           },{
            src:'/assets/4.jpg'
           },{
            src:'/assets/5.jpg'
           },{
            src:'/assets/6.jpg'
           },{
            src:'/assets/7.jpg'
           },
    ]



    const breakpoints = {
        1024: {
            slidesPerView: 4,
            spaceBetween: 1000,
            //  centeredSlides: true,

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
        // <section className='px-5 lg:px-20 '>
             <Swiper
             className='overflow-auto'
             modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{delay:3000}}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
      }}
     
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index}>
          <Image  src={partner.src} alt={`Partner ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default Partner