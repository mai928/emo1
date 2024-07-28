'use client'
import React, { useState, useEffect } from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Image from 'next/image';

const Buzz = () => {
  const [isClient, setIsClient] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const slides = [
    {
      key: 1,
      content: <Image src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: 2,
      content: <Image src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: 3,
      content: <Image src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: 4,
      content: <Image src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: 5,
      content: <Image src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: 6,
      content: <Image src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
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

  return (
    <section className='bg-black'>
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
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
