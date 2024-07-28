'use client'
import React, { useState, useEffect } from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Image from 'next/image';
import { Productgallery } from '@/data/data';

const Buzz = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

 



  const slides = [
    {
      key: 1,
      content: <Image width={500} height={500} src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="1" />
    },
    {
      key: 2,
      content: <Image width={500} height={500} src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" alt="2" />
    },
    {
      key: 3,
      content: <Image width={500} height={500} src="https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg" alt="3" />
    },
    {
      key: 4,
      content: <Image width={500} height={500} src="https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg" alt="4" />
    },
    {
      key: 5,
      content: <Image width={500} height={500} src="https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg" alt="5" />
    },
    {
      key: 6,
      content: <Image width={500} height={500} src="https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg" alt="6" />
    },
    {
      key: 7,
      content: <Image width={500} height={500} src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" alt="7" />
    },
    {
      key: 8,
      content: <Image width={500} height={500} src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" alt="8" />
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "goToSlide") {
      setGoToSlide(parseInt(value, 10) || 0);
    } else if (name === "offsetRadius") {
      setOffsetRadius(parseInt(value, 10) || 0);
    }
  };

  const handleConfigChange = (newConfig) => () => {
    setAnimationConfig(newConfig);
  };

  const images = Productgallery.map((image) => ({
    ...image,
    customOverlay: (
      <div className="custom-overlay__caption">
        <Image src={image.src}/>
      <div className='text-2xl font-bold'>{image.caption}</div>
      </div>
    ),
    }));

  return (
    <section className='bg-black'>
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={images}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={animationConfig}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          {/* Your additional controls can go here */}
        </div>
      </div>
    </section>
  );
};

export default Buzz;


