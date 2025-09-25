import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



const ImageSlider = () => {
  const images = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
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
