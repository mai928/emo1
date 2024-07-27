'use client';

import { Productgallery } from '@/data/data';
import React from 'react';
import { ImageGallery } from 'react-image-grid-gallery';


const images = Productgallery.map((image) => ({
	...image,
	customOverlay: (
	  <div className="custom-overlay__caption">
		<div className='text-2xl font-bold'>{image.caption}</div>
	  </div>
	),
  }));

const Practice = () => {
  return (
    <section className='bg-black'>

      <ImageGallery imagesInfoArray={images} columnWidth={500} gapSize={2} />

    </section>
  );
};

export default Practice;
