import React from 'react';
import Slider from 'react-slick';

import hero1 from '../../images/hero1.jpeg';
import hero2 from '../../images/hero2.jpeg';


const Carousel = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // todo: imagens caroussel, mobile breakpoints, menu hamburguer, linkds onde deve ser links

  return (
    <div className="carousel">
      <Slider className="carousel-slider" {...settings}>
        <img src={ hero1 } alt="hero image"  />
        <img src={ hero2 } alt="hero image" />
      </Slider>
    </div>
  )
};

export default Carousel;
