import React from 'react';
import Slider from 'react-slick';


const Carousel = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
        <p>item4</p>
      </Slider>
    </div>
  )
};

export default Carousel;
