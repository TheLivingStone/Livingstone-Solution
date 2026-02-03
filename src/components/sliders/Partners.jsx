import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



const ImageSlider = () => {
  const images = [
    '/img/partners/1.svg',
    '/img/partners/2.svg',
    '/img/partners/1.svg',
    '/img/partners/2.svg',
    '/img/partners/1.svg',
    '/img/partners/2.svg',
    '/img/partners/1.svg',
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((imageUrl, index) => (
          <div className="slide" key={`slide-${index}`}>
            <img src={imageUrl} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
