'use client'
import React, { useState } from 'react'
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Image from 'next/image';

const slides = [
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/800/801/?random" alt="1" />
  },
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/800/802/?random" alt="2" />
  },
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/600/803/?random" alt="3" />
  },
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/800/804/?random" alt="5" />
  },
  {
    key: uuidv4(),
    content: <Image src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/805/800/?random" alt="8" />
  }
]






const Buzz = () => {

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);


  slides.map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));


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
          showNavigation={'true'}
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
          {/* <div>
            <label>Go to slide: </label>
            <input
              type="number"
              name="goToSlide"
              value={goToSlide}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input
              type="number"
              name="offsetRadius"
              value={offsetRadius}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={showNavigation}
              name="showNavigation"
              onChange={(e) => setShowNavigation(e.target.checked)}
            />
          </div>
          <div>
            <button
              onClick={handleConfigChange(config.gentle)}
              disabled={animationConfig === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={handleConfigChange(config.slow)}
              disabled={animationConfig === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={handleConfigChange(config.wobbly)}
              disabled={animationConfig === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={handleConfigChange(config.stiff)}
              disabled={animationConfig === config.stiff}
            >
              Stiff Transition
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Buzz